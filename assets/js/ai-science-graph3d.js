// 3D view of the AI × Science knowledge graph: a soft "bokeh constellation".
// The 2D script (ai-science-graph.js) stays the source of truth for selection, search,
// type filters, the connections panel and ?node= links; this view listens to it and calls it.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';

const root = document.querySelector('#knowledge-graph');
const host = root && root.querySelector('#kg3d');
if (host) start().catch(err => { console.warn('3D graph unavailable, showing 2D.', err); fallback(); });

function fallback() {
  root.classList.remove('kg-mode-3d');
  const modes = root.querySelector('.kg-mode');
  if (modes) modes.hidden = true;
  host.hidden = true;
}

async function start() {
  const probe = document.createElement('canvas');
  if (!probe.getContext('webgl2')) throw new Error('WebGL2 not available');
  const data = await fetch(root.dataset.src).then(r => r.json());
  build(data);
}

const COLOR = { resource: '#ff8a6b', topic: '#f06f8f', concept: '#8fa6ff', method: '#b79cff', person: '#7cc8ff', org: '#e8c07a', system: '#6fdcc0', venue: '#a9a3c4', artifact: '#a9a3c4' };
const TYPE_LABEL = { resource: 'Reading', topic: 'Topic', concept: 'Concept', method: 'Method', person: 'Person', org: 'Organisation', venue: 'Venue', system: 'AI system', artifact: 'Code & data' };
const OUT_COLOR = new THREE.Color('#ff9a76'), IN_COLOR = new THREE.Color('#9db0ff');

// Deterministic force layout in 3D: golden-spiral start (topics nearer the middle), pairwise repulsion,
// springs on edges, a weak pull to the centre. No randomness, so every visit sees the same shape.
function layout(types, links) {
  const n = types.length, P = new Float64Array(n * 3), V = new Float64Array(n * 3);
  const ring = { topic: 0.45, resource: 0.75, concept: 0.9, method: 0.95, system: 0.95, person: 1.1, org: 1.1, venue: 1.2, artifact: 1.2 };
  const R0 = 22 * Math.cbrt(n);
  for (let i = 0; i < n; i++) {
    const y = 1 - 2 * (i + 0.5) / n, r = Math.sqrt(1 - y * y), th = i * 2.399963, R = R0 * (ring[types[i]] || 1);
    P[i * 3] = R * r * Math.cos(th); P[i * 3 + 1] = R * y; P[i * 3 + 2] = R * r * Math.sin(th);
  }
  let alpha = 1;
  for (let it = 0; it < 240; it++) {
    for (let i = 0; i < n; i++) {
      const a = i * 3;
      for (let j = i + 1; j < n; j++) {
        const b = j * 3;
        let dx = P[b] - P[a], dy = P[b + 1] - P[a + 1], dz = P[b + 2] - P[a + 2];
        const d2 = dx * dx + dy * dy + dz * dz + 0.01;
        if (d2 > 90000) continue;
        const f = 900 * alpha / (d2 * Math.sqrt(d2));
        dx *= f; dy *= f; dz *= f;
        V[a] -= dx; V[a + 1] -= dy; V[a + 2] -= dz; V[b] += dx; V[b + 1] += dy; V[b + 2] += dz;
      }
    }
    for (const [s, t, tagged] of links) {
      const a = s * 3, b = t * 3, dx = P[b] - P[a], dy = P[b + 1] - P[a + 1], dz = P[b + 2] - P[a + 2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.01, k = (tagged ? 0.02 : 0.04) * alpha * (d - (tagged ? 60 : 40)) / d;
      V[a] += dx * k; V[a + 1] += dy * k; V[a + 2] += dz * k; V[b] -= dx * k; V[b + 1] -= dy * k; V[b + 2] -= dz * k;
    }
    for (let i = 0; i < n * 3; i++) { V[i] -= P[i] * 0.004 * alpha; P[i] += V[i]; V[i] *= 0.6; }
    alpha *= 0.988;
  }
  const c = [0, 0, 0];
  for (let i = 0; i < n * 3; i++) c[i % 3] += P[i] / n;
  for (let i = 0; i < n * 3; i++) P[i] -= c[i % 3];
  // Turn the cloud so its longest axis runs left to right in the default view
  const cov = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < n; i++) for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) cov[r * 3 + q] += P[i * 3 + r] * P[i * 3 + q];
  let ax = [1, 0.3, 0.2];
  for (let k = 0; k < 40; k++) {
    const m = [0, 1, 2].map(r => cov[r * 3] * ax[0] + cov[r * 3 + 1] * ax[1] + cov[r * 3 + 2] * ax[2]);
    const len = Math.hypot(...m); ax = m.map(x => x / len);
  }
  const rot = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(...ax), new THREE.Vector3(1, 0, 0)), p = new THREE.Vector3();
  for (let i = 0; i < n; i++) { p.set(P[i * 3], P[i * 3 + 1], P[i * 3 + 2]).applyQuaternion(rot); P[i * 3] = p.x; P[i * 3 + 1] = p.y; P[i * 3 + 2] = p.z; }
  return P;
}

// Four shared disc textures from sharp to fully defocused, plus a thin ring for the focus.
function discTexture(soft) {
  const s = 128, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  if (soft === 0) { grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.62, 'rgba(255,255,255,0.92)'); grad.addColorStop(0.7, 'rgba(255,255,255,0.35)'); grad.addColorStop(0.78, 'rgba(255,255,255,0)'); }
  else if (soft === 1) { grad.addColorStop(0, 'rgba(255,255,255,0.9)'); grad.addColorStop(0.5, 'rgba(255,255,255,0.75)'); grad.addColorStop(0.8, 'rgba(255,255,255,0.12)'); grad.addColorStop(1, 'rgba(255,255,255,0)'); }
  else if (soft === 2) { grad.addColorStop(0, 'rgba(255,255,255,0.7)'); grad.addColorStop(0.45, 'rgba(255,255,255,0.5)'); grad.addColorStop(1, 'rgba(255,255,255,0)'); }
  else { grad.addColorStop(0, 'rgba(255,255,255,0.45)'); grad.addColorStop(0.35, 'rgba(255,255,255,0.32)'); grad.addColorStop(1, 'rgba(255,255,255,0)'); }
  g.fillStyle = grad; g.fillRect(0, 0, s, s);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function ringTexture() {
  const s = 128, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'); g.strokeStyle = 'rgba(255,255,255,0.95)'; g.lineWidth = 3;
  g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 4, 0, Math.PI * 2); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function build(data) {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 600px)').matches;
  const canvas = host.querySelector('canvas');
  const labelLayer = host.querySelector('.kg3d-labels');
  const card = host.querySelector('.kg3d-card');
  const tourBtn = host.querySelector('.kg3d-tour');
  const resetBtn = host.querySelector('.kg3d-reset');
  const bus = () => window.aiScienceGraph;

  // Data
  const nodes = data.nodes.map((n, i) => ({ ...n, i, deg: 0, out: [], inc: [] }));
  const byId = new Map(nodes.map(n => [n.id, n]));
  const edges = data.edges.map(e => ({ r: e.r, note: e.note, a: byId.get(e.s), b: byId.get(e.t) })).filter(e => e.a && e.b);
  edges.forEach(e => { e.a.deg++; e.b.deg++; e.a.out.push(e); e.b.inc.push(e); });
  const P = layout(nodes.map(n => n.type), edges.map(e => [e.a.i, e.b.i, e.r === 'tagged' ? 1 : 0]));
  let radius = 0;
  nodes.forEach(n => { n.pos = new THREE.Vector3(P[n.i * 3], P[n.i * 3 + 1], P[n.i * 3 + 2]); radius = Math.max(radius, n.pos.length()); });
  const hubs = [...nodes].sort((a, b) => b.deg - a.deg);
  const neighbours = n => [...new Set([...n.out.map(e => e.b), ...n.inc.map(e => e.a)])].sort((a, b) => b.deg - a.deg);

  // Renderer, camera, controls
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 1, radius * 20);
  const overviewDist = radius * 1.9;
  camera.position.set(0, radius * 0.35, overviewDist);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 30; controls.maxDistance = radius * 4;
  controls.autoRotate = !reduceMotion; controls.autoRotateSpeed = 0.1; // about 0.6° a second
  canvas.style.touchAction = 'pan-y'; // a vertical swipe still scrolls the page; sideways swipes orbit

  // Nodes as additive sprites with fake depth of field
  const tex = [0, 1, 2, 3].map(discTexture);
  nodes.forEach(n => {
    n.size = Math.min(16, 3 + 2.2 * Math.sqrt(n.deg));
    n.mat = new THREE.SpriteMaterial({ map: tex[0], color: new THREE.Color(COLOR[n.type] || '#a9a3c4'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    n.sprite = new THREE.Sprite(n.mat);
    n.sprite.position.copy(n.pos);
    n.vis = 1; n.visTarget = 1; n.lit = 1;
    scene.add(n.sprite);
  });

  // Background dust on a far shell, from a seeded generator so it does not shift between visits
  let seed = 7; const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const dustCount = small ? 300 : 600, dust = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    const u = rand() * 2 - 1, th = rand() * Math.PI * 2, r = radius * (1.6 + rand() * 2.4), s = Math.sqrt(1 - u * u);
    dust.set([r * s * Math.cos(th), r * u, r * s * Math.sin(th)], i * 3);
  }
  const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
  scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xc8d0ff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0.3, depthWrite: false })));

  // Focus ring, hover ring, link lines
  const ringTex = ringTexture();
  const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, opacity: 0.85, depthWrite: false })); ring.visible = false; scene.add(ring);
  const hoverRing = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, opacity: 0.4, depthWrite: false })); hoverRing.visible = false; scene.add(hoverRing);
  const maxLinks = Math.max(...nodes.map(n => n.deg));
  const linkPos = new Float32Array(maxLinks * 6), linkCol = new Float32Array(maxLinks * 6);
  const linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPos, 3));
  linkGeo.setAttribute('color', new THREE.BufferAttribute(linkCol, 3));
  linkGeo.setDrawRange(0, 0);
  const linkMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false });
  const lines = new THREE.LineSegments(linkGeo, linkMat); lines.frustumCulled = false; scene.add(lines);

  // Labels: a small pool of DOM elements, positioned each frame
  const labelCap = small ? 10 : 24;
  const pool = Array.from({ length: labelCap + 2 }, () => {
    const el = document.createElement('div'); el.className = 'kg3d-label'; el.hidden = true;
    const dot = document.createElement('i'), txt = document.createElement('span'); el.append(dot, txt); labelLayer.append(el);
    return { el, dot, txt, node: null };
  });

  // State
  let focus = null, hover = null, linkT = 1, linkList = [];
  let flight = null, touring = false, tourIdx = 0, tourTimer = 0, interacted = false;
  const hidden = new Set();
  let W = 1, H = 1;

  function resize() {
    W = host.clientWidth || 1; H = host.clientHeight || 1;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  resize();

  // Camera flights: land the focus node right of centre (on phones above centre, clear of the card)
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  function flyTo(target, camPos, dur = 1100) {
    if (reduceMotion || dur === 0) { flight = null; controls.target.copy(target); camera.position.copy(camPos); controls.update(); return; }
    flight = { t0: performance.now(), dur, fromT: controls.target.clone(), toT: target, fromC: camera.position.clone(), toC: camPos };
  }
  function flyToNode(n, dur = 1100) {
    const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
    // Close enough to read the node, far enough that most of its neighbours stay in frame
    const spread = neighbours(n).map(m => m.pos.distanceTo(n.pos)).sort((a, b) => a - b);
    const dist = Math.min(radius * 1.8, Math.max(140, 1.5 * (spread[Math.floor(spread.length * 0.75)] || 0)) / Math.min(1, camera.aspect * 1.2));
    const up = camera.up.clone(), right = new THREE.Vector3().crossVectors(dir, up).normalize();
    const trueUp = new THREE.Vector3().crossVectors(right, dir).normalize();
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist, halfW = halfH * camera.aspect;
    const [nx, ny] = W < 600 ? [0, 0.3] : [0.2, 0.1]; // where the node lands, in normalised screen units
    const target = n.pos.clone().addScaledVector(right, -nx * halfW).addScaledVector(trueUp, -ny * halfH);
    flyTo(target, target.clone().addScaledVector(dir, -dist), dur);
  }
  function flyHome() {
    const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
    flyTo(new THREE.Vector3(), dir.multiplyScalar(overviewDist));
  }

  function setFocus(n, { fly = true } = {}) {
    if (n === focus) return;
    focus = n;
    linkList = [];
    if (n) {
      n.out.forEach(e => { if (!hidden.has(e.b.type)) linkList.push({ to: e.b, col: OUT_COLOR }); });
      n.inc.forEach(e => { if (!hidden.has(e.a.type)) linkList.push({ to: e.a, col: IN_COLOR }); });
      linkT = reduceMotion ? 1 : 0;
      const near = new Set(neighbours(n)); near.add(n);
      nodes.forEach(m => { m.lit = near.has(m) ? 1 : 0.32; });
      if (fly) flyToNode(n);
    } else {
      nodes.forEach(m => { m.lit = 1; });
      if (fly) flyHome();
    }
    linkGeo.setDrawRange(0, linkList.length * 2);
    renderCard();
    canvas.setAttribute('aria-label', n ? `3D knowledge graph, focused on ${n.label}. Use the left and right arrow keys to step through its connections, Escape to clear.` : `3D knowledge graph of ${nodes.length} nodes and ${edges.length} links. Press the right arrow key to start at the best-connected node.`);
  }

  // Selection goes through the shared 2D controller so the panel, URL and search stay in step.
  function select(n) {
    const b = bus();
    if (b && b.select) b.select(n ? n.id : null); else setFocus(n);
  }
  root.addEventListener('kg:select', ev => { if (isActive()) setFocus(ev.detail.id ? byId.get(ev.detail.id) || null : null); else pendingId = ev.detail.id; });
  root.addEventListener('kg:types', ev => {
    hidden.clear(); ev.detail.hidden.forEach(t => hidden.add(t));
    nodes.forEach(n => { n.visTarget = hidden.has(n.type) ? 0 : 1; });
    if (focus) { const f = focus; focus = null; setFocus(f, { fly: false }); }
  });
  let pendingId = null;

  // Card
  const fmtDate = s => { const d = new Date(s + 'T00:00:00'); return isNaN(d) ? s : d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }); };
  const h = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  function renderCard() {
    card.replaceChildren();
    if (!focus) {
      card.classList.add('is-intro');
      card.append(h('p', 'kg3d-eyebrow', 'Knowledge graph · ' + nodes.length + ' nodes · ' + edges.length + ' links'));
      card.append(h('p', 'kg3d-body', small ? 'Tap a glowing node to follow its connections. Swipe sideways to turn the space and pinch to zoom.' : 'Click a glowing node to follow its connections. Drag to orbit, right-drag to pan, scroll to zoom.'));
      return;
    }
    card.classList.remove('is-intro');
    const n = focus;
    const bits = [TYPE_LABEL[n.type] || n.type];
    if (n.type === 'resource') { if (n.kind) bits.push(n.kind); if (n.date) bits.push(fmtDate(n.date)); }
    else { const topic = neighbours(n).find(m => m.type === 'topic' && m !== n); if (topic) bits.push(topic.label); }
    card.append(h('p', 'kg3d-eyebrow', bits.join(' · ')));
    card.append(h('h3', 'kg3d-title', n.label));
    let body = n.description;
    if (!body) {
      const reads = neighbours(n).filter(m => m.type === 'resource');
      body = reads.length ? `Connected to ${reads.length} reading${reads.length > 1 ? 's' : ''}: ${reads.slice(0, 3).map(m => m.label).join('; ')}${reads.length > 3 ? '…' : '.'}` : `Connected to ${neighbours(n).length} nodes.`;
    }
    card.append(h('p', 'kg3d-body', body));
    const foot = h('p', 'kg3d-foot');
    const outN = n.out.length, inN = n.inc.length;
    const counts = h('span', 'kg3d-counts');
    counts.append(h('b', 'kg3d-out', 'Links out ' + outN), document.createTextNode(' · '), h('b', 'kg3d-in', 'links in ' + inN));
    foot.append(counts);
    if (n.url) { const a = h('a', null, 'Open ↗'); a.href = n.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; foot.append(a); }
    if (n.anchor) { const a = h('a', null, 'Show on page'); a.href = n.anchor; foot.append(a); }
    const all = h('a', null, 'All connections ↓'); all.href = '#kg-panel'; foot.append(all);
    card.append(foot);
  }

  // Picking in screen space so small or distant nodes stay easy to hit, especially on touch
  const v = new THREE.Vector3();
  function pick(cx, cy, minPx) {
    const rect = canvas.getBoundingClientRect(), x = cx - rect.left, y = cy - rect.top;
    let best = null, bestD = Infinity;
    const k = H / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    for (const n of nodes) {
      if (n.vis < 0.5) continue;
      v.copy(n.pos).project(camera);
      if (v.z > 1) continue;
      const sx = (v.x + 1) / 2 * W, sy = (1 - v.y) / 2 * H;
      const rPx = Math.max(minPx, n.sprite.scale.x * 0.35 * k / camera.position.distanceTo(n.pos));
      const d = Math.hypot(sx - x, sy - y);
      if (d <= rPx && d - rPx < bestD) { best = n; bestD = d - rPx; }
    }
    return best;
  }
  let down = null;
  canvas.addEventListener('pointerdown', ev => { down = { x: ev.clientX, y: ev.clientY, t: performance.now() }; userInput(); });
  canvas.addEventListener('pointerup', ev => {
    if (!down) return;
    const moved = Math.hypot(ev.clientX - down.x, ev.clientY - down.y), quick = performance.now() - down.t < 600;
    down = null;
    if (moved > 6 || !quick) return;
    const n = pick(ev.clientX, ev.clientY, ev.pointerType === 'touch' ? 16 : 8);
    select(n);
  });
  let hoverXY = null;
  canvas.addEventListener('pointermove', ev => { if (ev.pointerType === 'mouse') hoverXY = [ev.clientX, ev.clientY]; });
  canvas.addEventListener('pointerleave', () => { hoverXY = null; hover = null; });
  canvas.addEventListener('wheel', userInput, { passive: true });
  canvas.addEventListener('keydown', ev => {
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
      ev.preventDefault(); userInput();
      if (!focus) { select(hubs.find(n => !hidden.has(n.type))); return; }
      const list = neighbours(focus).filter(m => !hidden.has(m.type));
      if (!list.length) return;
      stepIdx = (stepIdx + (ev.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length;
      select(list[stepIdx]);
    } else if (ev.key === 'Escape') { userInput(); select(null); }
    else if (ev.key === 'Enter' && focus && focus.url) window.open(focus.url, '_blank', 'noopener');
  });
  let stepIdx = -1;

  // Guided tour of the hubs; any input from the reader ends it until they press Tour again
  function userInput() { interacted = true; if (touring) setTour(false); controls.autoRotate = false; }
  function setTour(on) {
    touring = on && !reduceMotion;
    tourBtn.setAttribute('aria-pressed', String(touring));
    tourBtn.textContent = touring ? 'Stop tour' : 'Tour';
    tourTimer = 0;
    if (touring) { tourNext(); }
  }
  function tourNext() {
    const list = hubs.filter(n => !hidden.has(n.type)).slice(0, 12);
    if (!list.length) return;
    const n = list[tourIdx++ % list.length];
    setFocus(n); // the tour does not rewrite the URL or the panel below
  }
  tourBtn.addEventListener('click', () => { interacted = true; setTour(!touring); });
  resetBtn.addEventListener('click', () => { userInput(); select(null); });
  ['input', 'focus'].forEach(t => root.querySelector('#kg-search')?.addEventListener(t, () => { if (touring) setTour(false); interacted = true; }));
  root.querySelector('#kg-legend')?.addEventListener('click', () => { if (touring) setTour(false); interacted = true; });
  if (reduceMotion) tourBtn.hidden = true;

  // Render loop, only while the graph is on screen and the tab is visible
  let onScreen = false, raf = 0, last = performance.now(), idle = 0;
  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; wake(); }, { threshold: 0.05 }).observe(host);
  document.addEventListener('visibilitychange', wake);
  function wake() { if (!raf && onScreen && !document.hidden && isActive()) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function isActive() { return root.classList.contains('kg-mode-3d'); }

  const camDir = new THREE.Vector3();
  function frame(now) {
    raf = 0;
    if (!onScreen || document.hidden || !isActive()) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;

    if (flight) {
      const t = Math.min(1, (now - flight.t0) / flight.dur), e = ease(t);
      controls.target.lerpVectors(flight.fromT, flight.toT, e);
      camera.position.lerpVectors(flight.fromC, flight.toC, e);
      if (t >= 1) flight = null;
    }
    controls.update(dt);

    if (!interacted && !reduceMotion) { idle += dt; if (idle > 4 && !touring && !focus) setTour(true); }
    if (touring) { tourTimer += dt; if (tourTimer > 7) { tourTimer = 0; tourNext(); } }

    if (hoverXY) { const n = pick(hoverXY[0], hoverXY[1], 6); hover = n; canvas.style.cursor = n ? 'pointer' : ''; }

    // Depth of field: blur by distance from the focal plane, which sits at the focus node or the orbit centre
    camera.getWorldDirection(camDir);
    const focalDepth = (focus ? v.subVectors(focus.pos, camera.position).dot(camDir) : v.subVectors(controls.target, camera.position).dot(camDir));
    const range = radius * 0.9;
    for (const n of nodes) {
      n.vis += (n.visTarget - n.vis) * Math.min(1, dt * 8);
      const depth = v.subVectors(n.pos, camera.position).dot(camDir);
      const blur = Math.min(1, Math.abs(depth - focalDepth) / range);
      const level = Math.min(3, Math.floor(blur * 4));
      if (n.mat.map !== tex[level]) n.mat.map = tex[level];
      const lit = n.lit;
      // fade anything that drifts right up to the lens so it does not swamp the frame
      const nearFade = Math.min(1, Math.max(0, (depth - 25) / 90));
      n.mat.opacity = (0.95 - 0.67 * blur) * lit * n.vis * nearFade;
      const s = n.size * 2.6 * (1 + 0.8 * blur);
      n.sprite.scale.set(s, s, 1);
      n.sprite.visible = n.vis > 0.02;
    }

    if (focus) {
      ring.visible = true; ring.position.copy(focus.pos);
      const pulse = reduceMotion ? 1 : 1 + 0.08 * Math.sin(now / 1000 * Math.PI * 2 / 2.4);
      const s = focus.size * 2.6 * pulse; ring.scale.set(s, s, 1);
      linkT = Math.min(1, linkT + dt / 0.6);
      const e = ease(linkT);
      linkList.forEach((l, i) => {
        const a = focus.pos, b = l.to.pos;
        linkPos.set([a.x, a.y, a.z, a.x + (b.x - a.x) * e, a.y + (b.y - a.y) * e, a.z + (b.z - a.z) * e], i * 6);
        linkCol.set([l.col.r, l.col.g, l.col.b, l.col.r, l.col.g, l.col.b], i * 6);
      });
      linkGeo.attributes.position.needsUpdate = true; linkGeo.attributes.color.needsUpdate = true;
    } else ring.visible = false;
    if (hover && hover !== focus) { hoverRing.visible = true; hoverRing.position.copy(hover.pos); const s = hover.size * 2.6 * 0.95; hoverRing.scale.set(s, s, 1); } else hoverRing.visible = false;

    renderer.render(scene, camera);
    placeLabels();
    raf = requestAnimationFrame(frame);
  }

  let cardBox = { top: Infinity, right: -Infinity };
  function measureCard() { const h = host.getBoundingClientRect(), c = card.getBoundingClientRect(); cardBox = { top: c.top - h.top, right: c.right - h.left }; }
  new ResizeObserver(measureCard).observe(card);
  function placeLabels() {
    const placed = [];
    let want;
    if (focus) want = [focus, ...neighbours(focus).filter(m => !hidden.has(m.type)).slice(0, labelCap - 1)];
    else want = hubs.filter(m => !hidden.has(m.type)).slice(0, small ? 5 : 8);
    if (hover && !want.includes(hover)) want = [...want, hover];
    pool.forEach((p, i) => {
      const n = want[i];
      if (!n) { p.el.hidden = true; p.node = null; return; }
      v.copy(n.pos).project(camera);
      if (v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05) { p.el.hidden = true; return; }
      if (p.node !== n) {
        p.node = n; p.txt.textContent = n.label.length > 42 ? n.label.slice(0, 40) + '…' : n.label;
        p.dot.style.background = COLOR[n.type] || '#a9a3c4';
      }
      p.el.hidden = false;
      p.el.classList.toggle('is-focus', n === focus);
      p.el.classList.toggle('is-quiet', !focus && n !== hover);
      const k = H / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
      const rPx = n.sprite.scale.x * 0.35 * k / camera.position.distanceTo(n.pos);
      const w = 7 * p.txt.textContent.length + 12, cx = (v.x + 1) / 2 * W;
      let y = (1 - v.y) / 2 * H;
      // Labels sit right of their node, left of it near the right edge, or centred below it when neither fits
      let flip = cx + rPx + 6 + w > W - 8, x = flip ? cx - rPx - 6 - w : cx + rPx + 6;
      if (x < 8) { flip = false; x = Math.min(W - w - 8, Math.max(8, cx - w / 2)); y += rPx + 12; }
      p.el.classList.toggle('is-flipped', flip);
      // Skip a label hidden by the card, or a secondary one that would sit on top of one already placed
      if (y > cardBox.top - 6 && x < cardBox.right + 4 && n !== focus) { p.el.hidden = true; return; }
      if (n !== focus && n !== hover && placed.some(r => Math.abs(r.y - y) < 15 && x < r.x + r.w && r.x < x + w)) { p.el.hidden = true; return; }
      placed.push({ x, y, w });
      p.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translateY(-50%)`;
    });
  }

  // Mode toggle between the 3D space and the 2D map; the focused node carries across.
  const modeBtns = [...root.querySelectorAll('.kg-mode button')];
  function setMode(mode) {
    root.classList.toggle('kg-mode-3d', mode === '3d');
    host.hidden = mode !== '3d';
    root.querySelector('.kg-stage').hidden = mode === '3d';
    modeBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    if (mode === '3d') {
      resize();
      const b = bus(), id = pendingId ?? (b && b.selected && b.selected());
      pendingId = null;
      if (id && byId.has(id) && byId.get(id) !== focus) { setFocus(byId.get(id), { fly: false }); flyToNode(focus, 0); }
      wake();
    }
  }
  modeBtns.forEach(b => b.addEventListener('click', () => { userInput(); setMode(b.dataset.mode); }));
  root.querySelector('.kg-mode').hidden = false;

  renderCard();
  const startId = new URLSearchParams(location.search).get('node');
  setMode(reduceMotion ? '2d' : '3d');
  const b = bus();
  if (b && b.hidden) b.hidden().forEach(t => { hidden.add(t); });
  nodes.forEach(n => { n.visTarget = n.vis = hidden.has(n.type) ? 0 : 1; });
  const initial = (b && b.selected && b.selected()) || startId;
  if (initial && byId.has(initial)) {
    interacted = true; controls.autoRotate = false;
    setFocus(byId.get(initial), { fly: false }); flyToNode(focus, 0);
    if (startId === initial) root.scrollIntoView();
  }
  // A small handle for testing and for other scripts on the page
  window.aiScienceGraph3d = {
    focus: id => select(byId.get(id) || null),
    screen: id => { const n = byId.get(id), r = canvas.getBoundingClientRect(); v.copy(n.pos).project(camera); return [r.left + (v.x + 1) / 2 * W, r.top + (1 - v.y) / 2 * H]; },
    state: () => ({ focus: focus && focus.id, touring, camera: camera.position.toArray(), target: controls.target.toArray(), links: linkList.length, out: focus ? focus.out.length : 0, inc: focus ? focus.inc.length : 0 }) };
}
