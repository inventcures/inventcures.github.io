(() => {
  'use strict';
  const root = document.querySelector('#knowledge-graph');
  if (!root) return;
  const svg = root.querySelector('#kg-svg');
  const panel = root.querySelector('#kg-panel');
  const search = root.querySelector('#kg-search');
  const legend = root.querySelector('#kg-legend');
  const NS = 'http://www.w3.org/2000/svg';
  const TYPE_LABEL = { resource: 'Reading', topic: 'Topic', concept: 'Concept', method: 'Method', person: 'Person', org: 'Organisation', venue: 'Venue', system: 'AI system', artifact: 'Code & data' };
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (name, attrs = {}, parent) => { const n = document.createElementNS(NS, name); for (const k in attrs) n.setAttribute(k, attrs[k]); if (parent) parent.append(n); return n; };
  const h = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const normalize = s => s.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase();

  fetch(root.dataset.src).then(r => r.json()).then(init).catch(err => {
    console.error(err);
    panel.textContent = 'The graph data could not be loaded. ';
    const a = h('a', null, 'Open the graph JSON'); a.href = root.dataset.src; panel.append(a);
  });

  function init(data) {
    const nodes = data.nodes.map(n => ({ ...n, deg: 0, links: [] }));
    const byId = new Map(nodes.map(n => [n.id, n]));
    const edges = data.edges.map(e => ({ ...e, a: byId.get(e.s), b: byId.get(e.t) }));
    edges.forEach(e => { e.a.deg++; e.b.deg++; e.a.links.push(e); e.b.links.push(e); });
    // The viewBox matches the rendered size so labels stay at real pixel sizes; forces scale with the area.
    const W = Math.max(320, Math.round(svg.clientWidth || 760)), H = Math.round(Math.min(680, Math.max(440, W * 0.72)));
    const S = Math.sqrt(W * H / (900 * 640));
    const hidden = new Set();
    let selected = null, query = [];

    // Deterministic start: each type on its own ring, spread by the golden angle, so the layout is stable between visits.
    const ring = { resource: 0.55, topic: 0.15, concept: 0.3, method: 0.8, person: 0.95, org: 0.9, venue: 1, system: 0.75, artifact: 1 };
    nodes.forEach((n, i) => {
      const angle = i * 2.39996, r = 260 * S * ring[n.type];
      n.x = W / 2 + r * Math.cos(angle); n.y = H / 2 + r * Math.sin(angle); n.vx = n.vy = 0;
      n.r = (n.type === 'resource' ? 6 : n.type === 'topic' ? 7 : 5) + Math.sqrt(n.deg) * 1.6;
    });

    // Scene
    const view = el('g', { class: 'kg-view' }, svg);
    const edgeLayer = el('g', { class: 'kg-edges' }, view);
    const nodeLayer = el('g', { class: 'kg-nodes' }, view);
    edges.forEach(e => { e.line = el('line', { class: 'kg-edge kg-edge-' + e.r }, edgeLayer); });
    nodes.forEach(n => {
      n.g = el('g', { class: 'kg-node kg-' + n.type, tabindex: '-1' }, nodeLayer);
      el('circle', { r: n.r }, n.g);
      const label = n.label.length > 34 ? n.label.slice(0, 32) + '…' : n.label;
      n.text = el('text', { x: n.r + 3, y: 4 }, n.g); n.text.textContent = label;
      el('title', {}, n.g).textContent = (TYPE_LABEL[n.type] || n.type) + ': ' + n.label;
      n.g.__node = n;
    });

    // Force simulation: pairwise repulsion, springs on edges, weak pull to the centre.
    let alpha = 1;
    function tick() {
      const live = nodes;
      for (let i = 0; i < live.length; i++) {
        const a = live[i];
        for (let j = i + 1; j < live.length; j++) {
          const b = live[j];
          let dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy || 0.01;
          if (d2 > 90000 * S * S) continue;
          const f = 1400 * S * S * alpha / d2, d = Math.sqrt(d2);
          dx /= d; dy /= d;
          a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
        }
      }
      edges.forEach(e => {
        const dx = e.b.x - e.a.x, dy = e.b.y - e.a.y, d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const rest = (e.r === 'tagged' ? 120 : 80) * S, k = (e.r === 'tagged' ? 0.02 : 0.05) * alpha * (d - rest) / d;
        e.a.vx += dx * k; e.a.vy += dy * k; e.b.vx -= dx * k; e.b.vy -= dy * k;
      });
      live.forEach(n => {
        n.vx += (W / 2 - n.x) * 0.004 * alpha; n.vy += (H / 2 - n.y) * 0.004 * alpha;
        if (n.fixed) { n.vx = n.vy = 0; return; }
        n.x += n.vx; n.y += n.vy; n.vx *= 0.6; n.vy *= 0.6;
        // keep stragglers inside the frame
        n.x = Math.min(W - 60, Math.max(20, n.x)); n.y = Math.min(H - 20, Math.max(20, n.y));
      });
      alpha *= 0.985;
    }
    function draw() {
      edges.forEach(e => { e.line.setAttribute('x1', e.a.x.toFixed(1)); e.line.setAttribute('y1', e.a.y.toFixed(1)); e.line.setAttribute('x2', e.b.x.toFixed(1)); e.line.setAttribute('y2', e.b.y.toFixed(1)); });
      nodes.forEach(n => n.g.setAttribute('transform', `translate(${n.x.toFixed(1)},${n.y.toFixed(1)})`));
    }
    let running = false;
    function run() {
      if (running) return; running = true;
      const step = () => { for (let i = 0; i < 2; i++) tick(); draw(); if (alpha > 0.02) requestAnimationFrame(step); else { running = false; if (!touched) fit(); } };
      requestAnimationFrame(step);
    }
    // Pan and zoom
    let t = { x: 0, y: 0, k: 1 }, touched = false;
    function fit() {
      const shown = nodes.filter(n => !hidden.has(n.type));
      if (!shown.length) return;
      const xs = shown.map(n => n.x), ys = shown.map(n => n.y), pad = 30;
      const x0 = Math.min(...xs) - pad, x1 = Math.max(...xs) + pad + 40, y0 = Math.min(...ys) - pad, y1 = Math.max(...ys) + pad;
      const k = Math.min(1.6, W / (x1 - x0), H / (y1 - y0));
      t = { k, x: (W - (x1 - x0) * k) / 2 - x0 * k, y: (H - (y1 - y0) * k) / 2 - y0 * k }; apply();
    }
    const reheat = (to = 0.3) => { alpha = Math.max(alpha, to); if (!reduceMotion) run(); else { while (alpha > 0.02) tick(); draw(); } };
    const apply = () => { view.setAttribute('transform', `translate(${t.x},${t.y}) scale(${t.k})`); svg.classList.toggle('kg-zoomed', t.k > 1.8); };
    const toLocal = (cx, cy) => { const p = svg.createSVGPoint(); p.x = cx; p.y = cy; const q = p.matrixTransform(svg.getScreenCTM().inverse()); return { x: q.x, y: q.y }; };
    function zoomAt(px, py, factor) {
      touched = true; const k = Math.min(5, Math.max(0.4, t.k * factor)); const f = k / t.k;
      t.x = px - (px - t.x) * f; t.y = py - (py - t.y) * f; t.k = k; apply();
    }
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.style.aspectRatio = W + ' / ' + H;
    if (reduceMotion) { while (alpha > 0.02) tick(); draw(); fit(); } else { for (let i = 0; i < 120; i++) tick(); draw(); fit(); run(); }
    svg.addEventListener('wheel', ev => { ev.preventDefault(); const p = toLocal(ev.clientX, ev.clientY); zoomAt(p.x, p.y, ev.deltaY < 0 ? 1.15 : 1 / 1.15); }, { passive: false });
    root.querySelector('#kg-zoom-in').addEventListener('click', () => zoomAt(W / 2, H / 2, 1.3));
    root.querySelector('#kg-zoom-out').addEventListener('click', () => zoomAt(W / 2, H / 2, 1 / 1.3));
    root.querySelector('#kg-zoom-reset').addEventListener('click', fit);

    const pointers = new Map();
    let drag = null, pinch = null;
    svg.addEventListener('pointerdown', ev => {
      svg.setPointerCapture(ev.pointerId);
      const p = toLocal(ev.clientX, ev.clientY); pointers.set(ev.pointerId, p);
      if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: t.k }; drag = null; return; }
      const g = ev.target.closest('.kg-node');
      drag = { node: g && g.__node, start: p, moved: false, t0: { ...t } };
    });
    svg.addEventListener('pointermove', ev => {
      if (!pointers.has(ev.pointerId)) return;
      const p = toLocal(ev.clientX, ev.clientY); pointers.set(ev.pointerId, p);
      if (pinch && pointers.size === 2) { const [a, b] = [...pointers.values()]; const f = (Math.hypot(a.x - b.x, a.y - b.y) / pinch.d) * pinch.k / t.k; zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, f); return; }
      if (!drag) return;
      const dx = p.x - drag.start.x, dy = p.y - drag.start.y;
      if (!drag.moved && Math.hypot(dx, dy) < 4) return;
      drag.moved = true; touched = true;
      if (drag.node) { drag.node.fixed = true; drag.node.x = (p.x - t.x) / t.k; drag.node.y = (p.y - t.y) / t.k; reheat(0.15); draw(); }
      else { t.x = drag.t0.x + dx; t.y = drag.t0.y + dy; apply(); }
    });
    const end = ev => {
      pointers.delete(ev.pointerId);
      if (pointers.size < 2) pinch = null;
      if (!drag) return;
      if (drag.node) drag.node.fixed = false;
      if (!drag.moved) select(drag.node ? drag.node.id : null);
      drag = null;
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', ev => { pointers.delete(ev.pointerId); pinch = null; if (drag && drag.node) drag.node.fixed = false; drag = null; });

    // Legend doubles as a type filter
    const counts = {};
    nodes.forEach(n => { counts[n.type] = (counts[n.type] || 0) + 1; });
    data.types.filter(type => counts[type]).forEach(type => {
      const b = h('button', 'kg-chip kg-' + type);
      b.type = 'button'; b.setAttribute('aria-pressed', 'true');
      b.append(h('span', 'kg-swatch'), document.createTextNode(`${TYPE_LABEL[type] || type} · ${counts[type]}`));
      b.addEventListener('click', () => {
        hidden.has(type) ? hidden.delete(type) : hidden.add(type);
        b.setAttribute('aria-pressed', String(!hidden.has(type)));
        if (selected && hidden.has(selected.type)) select(null); else paint();
      });
      legend.append(b);
    });

    // Search
    const list = root.querySelector('#kg-options');
    [...nodes].sort((a, b) => a.label.localeCompare(b.label)).forEach(n => { const o = document.createElement('option'); o.value = n.label; list.append(o); });
    nodes.forEach(n => { n.searchText = normalize(n.label + ' ' + (n.description || '')); });
    search.addEventListener('input', () => {
      query = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
      const exact = nodes.find(n => n.label === search.value);
      if (exact) select(exact.id); else paint();
    });
    search.addEventListener('keydown', ev => {
      if (ev.key !== 'Enter') return;
      ev.preventDefault();
      const ok = n => query.length && query.every(w => n.searchText.includes(w));
      const hit = nodes.find(n => ok(n) && query.every(w => normalize(n.label).includes(w))) || nodes.find(ok);
      if (hit) select(hit.id);
    });

    // Label only the best-connected nodes so the default view stays readable as the graph grows.
    const hubMin = [...nodes].map(n => n.deg).sort((a, b) => b - a)[W < 600 ? 7 : 13] + 1;
    function paint() {
      const near = new Set();
      if (selected) { near.add(selected); selected.links.forEach(e => { near.add(e.a); near.add(e.b); }); }
      const matches = n => query.length && query.every(w => n.searchText.includes(w));
      nodes.forEach(n => {
        const off = hidden.has(n.type);
        const dim = selected ? !near.has(n) : query.length ? !matches(n) : false;
        n.g.classList.toggle('kg-off', off);
        n.g.classList.toggle('kg-dim', dim);
        n.g.classList.toggle('kg-on', !dim && (selected ? near.has(n) : query.length > 0));
        n.g.classList.toggle('kg-selected', n === selected);
        n.g.classList.toggle('kg-hub', n.deg >= hubMin);
      });
      edges.forEach(e => {
        const off = hidden.has(e.a.type) || hidden.has(e.b.type);
        e.line.classList.toggle('kg-off', off);
        e.line.classList.toggle('kg-dim', selected ? e.a !== selected && e.b !== selected : query.length > 0);
        e.line.classList.toggle('kg-hot', !!selected && (e.a === selected || e.b === selected));
      });
    }

    function select(id) {
      selected = id ? byId.get(id) : null;
      if (selected && hidden.has(selected.type)) { hidden.delete(selected.type); [...legend.children].forEach(b => { if (b.classList.contains('kg-' + selected.type)) b.setAttribute('aria-pressed', 'true'); }); }
      paint(); renderPanel();
      const url = new URL(location.href);
      selected ? url.searchParams.set('node', selected.id) : url.searchParams.delete('node');
      history.replaceState(null, '', url);
    }

    function renderPanel() {
      panel.replaceChildren();
      if (!selected) {
        panel.append(h('p', 'kg-hint', `${nodes.length} nodes and ${edges.length} links. Select a node to see what it connects to. Hubs are labelled; zoom in to see every label.`));
        return;
      }
      const n = selected;
      panel.append(h('p', 'kg-kind', (TYPE_LABEL[n.type] || n.type) + (n.kind ? ' · ' + n.kind : '') + (n.date ? ' · ' + n.date : '')));
      const title = h('h3', 'kg-title');
      if (n.url) { const a = h('a', null, n.label + ' ↗'); a.href = n.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; title.append(a); } else title.textContent = n.label;
      panel.append(title);
      if (n.description) panel.append(h('p', 'kg-desc', n.description));
      if (n.anchor) { const a = h('a', 'kg-jump', 'Read the entry in the reading desk ↓'); a.href = n.anchor; panel.append(a); }
      const groups = new Map();
      n.links.forEach(e => {
        const out = e.a === n, other = out ? e.b : e.a;
        const rel = data.relations[e.r] || { label: e.r, inverse: e.r };
        const label = out ? rel.label : rel.inverse;
        if (!groups.has(label)) groups.set(label, []);
        groups.get(label).push({ other, note: e.note });
      });
      const dl = h('dl', 'kg-links');
      [...groups].sort((a, b) => b[1].length - a[1].length).forEach(([label, items]) => {
        dl.append(h('dt', null, label));
        const dd = h('dd');
        items.sort((a, b) => a.other.label.localeCompare(b.other.label)).forEach(({ other, note }) => {
          const b = h('button', 'kg-link kg-' + other.type, other.label);
          b.type = 'button'; b.addEventListener('click', () => select(other.id));
          dd.append(b);
          if (note) dd.append(h('span', 'kg-note', note));
        });
        dl.append(dd);
      });
      panel.append(dl);
    }

    document.addEventListener('click', ev => {
      const link = ev.target.closest('[data-kg-node]');
      if (!link) return;
      ev.preventDefault(); select(link.dataset.kgNode); root.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    root.querySelector('.kg-controls').hidden = false;
    apply();
    const start = new URLSearchParams(location.search).get('node');
    select(start && byId.has(start) ? start : null);
  }
})();
