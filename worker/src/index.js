// City-level visitor counts for inventcures.github.io.
// Cloudflare geolocates each request at the edge (request.cf). This Worker
// reads only the resulting place names and never reads or stores the IP.
// Spec: docs/city-visitor-stats-spec.md

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });

function allowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
}

function corsHeaders(req, env, open) {
  const origin = req.headers.get('Origin') || '';
  const allow = open ? '*' : allowedOrigins(env).includes(origin) ? origin : allowedOrigins(env)[0] || '';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const round1 = (x) => (typeof x === 'number' || (typeof x === 'string' && x !== '') ? Math.round(Number(x) * 10) / 10 : null);
const clip = (s, n) => String(s || '').slice(0, n);

async function hit(req, env, cors) {
  const origin = req.headers.get('Origin') || '';
  if (!allowedOrigins(env).includes(origin)) return json({ error: 'origin not allowed' }, 403, cors);
  const text = await req.text();
  if (text.length > 1024) return json({ error: 'body too large' }, 413, cors);
  let body;
  try { body = JSON.parse(text); } catch { return json({ error: 'bad json' }, 400, cors); }
  let path = typeof body.path === 'string' ? body.path.split(/[?#]/)[0] : '';
  if (!path.startsWith('/') || path.length > 200) return json({ error: 'bad path' }, 400, cors);

  const cf = req.cf || {};
  const country = /^[A-Z]{2}$/.test(cf.country || '') ? cf.country : 'XX';
  const region = clip(cf.region, 80);
  const city = clip(cf.city, 80);
  const day = new Date().toISOString().slice(0, 10);
  await env.DB.prepare(
    `INSERT INTO city_visits (day, path, country, region, city, lat, lon, n)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, 1)
     ON CONFLICT (day, path, country, region, city) DO UPDATE SET n = n + 1`
  ).bind(day, path, country, region, city, round1(cf.latitude), round1(cf.longitude)).run();
  return new Response(null, { status: 204, headers: cors });
}

const PLACE_SQL = `SELECT country, region, city, AVG(lat) AS lat, AVG(lon) AS lon, SUM(n) AS count
  FROM city_visits WHERE day >= ?1 AND (?2 = '' OR path = ?2)
  GROUP BY country, region, city ORDER BY count DESC`;

const shape = (r) => ({
  city: r.city, region: r.region, country: r.country,
  lat: r.lat == null ? null : Math.round(r.lat * 10) / 10,
  lon: r.lon == null ? null : Math.round(r.lon * 10) / 10,
  count: r.count,
});

async function publicStats(env, cors) {
  const k = Math.max(1, parseInt(env.K_ANON || '5', 10));
  const { results } = await env.DB.prepare(PLACE_SQL).bind('0000-00-00', '').all();
  const shown = [], hidden = { visits: 0, places: 0 };
  let total = 0;
  for (const r of results) {
    total += r.count;
    if (r.city && r.count >= k && shown.length < 50) shown.push(shape(r));
    else { hidden.visits += r.count; hidden.places += 1; }
  }
  return json({ k, total, cities: shown, hidden, updated: new Date().toISOString() }, 200,
    { ...cors, 'Cache-Control': 'public, max-age=300' });
}

async function adminStats(req, env, url, cors) {
  const auth = req.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!env.ADMIN_TOKEN || !safeEqual(token, env.ADMIN_TOKEN)) return json({ error: 'unauthorized' }, 401, cors);
  const days = Math.min(3650, Math.max(1, parseInt(url.searchParams.get('days') || '30', 10) || 30));
  const since = new Date(Date.now() - (days - 1) * 864e5).toISOString().slice(0, 10);
  const path = clip(url.searchParams.get('path'), 200);
  const { results } = await env.DB.prepare(PLACE_SQL).bind(since, path).all();
  const total = results.reduce((s, r) => s + r.count, 0);
  return json({ days, path, total, cities: results.slice(0, 500).map(shape) }, 200,
    { ...cors, 'Cache-Control': 'no-store' });
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const open = url.pathname === '/public' || url.pathname === '/health';
    const cors = corsHeaders(req, env, open);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    try {
      if (url.pathname === '/hit' && req.method === 'POST') return await hit(req, env, cors);
      if (url.pathname === '/public' && req.method === 'GET') return await publicStats(env, cors);
      if (url.pathname === '/admin' && req.method === 'GET') return await adminStats(req, env, url, cors);
      if (url.pathname === '/health') return json({ ok: true }, 200, cors);
      return json({ error: 'not found' }, 404, cors);
    } catch (e) {
      return json({ error: 'server error' }, 500, cors);
    }
  },
};
