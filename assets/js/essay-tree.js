// Builds the essay "tree" (outline of h2/h3), reading progress and read time
// rail. Wide screens: fixed in the empty space left of the text. Narrow
// screens: a "Tree · 42%" button that opens the same panel as a sheet.
(function () {
  var rail = document.getElementById('et-rail');
  var content = document.querySelector('.page__content');
  var stMain = document.querySelector('.st-main');
  if (!rail || !content) return;
  var heads = Array.prototype.filter.call(content.querySelectorAll('h2, h3'), function (h) {
    return h.id && !h.closest('.footnotes, .sn-note');
  });
  var list = rail.querySelector('.et-tree');
  var links = heads.map(function (h) {
    var li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'et-h3' : 'et-h2';
    var a = document.createElement('a');
    a.href = '#' + encodeURIComponent(h.id);
    a.textContent = h.textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
    return a;
  });
  if (!links.length) { rail.querySelector('.et-label').remove(); list.parentNode.remove(); }

  // A transformed ancestor (sidenotes nudges #main) would break position:fixed.
  document.body.appendChild(rail);
  rail.hidden = false;
  var root = document.documentElement;
  var fill = rail.querySelector('.et-fill'), bar = rail.querySelector('.et-bar'), pct = rail.querySelector('.et-pct');

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'et-toggle';
  toggle.setAttribute('aria-controls', 'et-rail');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span>Tree</span><span class="et-tpct">0%</span>';
  document.body.appendChild(toggle);
  var tpct = toggle.querySelector('.et-tpct');
  function setOpen(o) { rail.classList.toggle('et-open', o); toggle.setAttribute('aria-expanded', o); }
  toggle.addEventListener('click', function () { setOpen(!rail.classList.contains('et-open')); });
  rail.addEventListener('click', function (e) { if (e.target.closest('nav a') && !wideMode) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

  // Share: copy the page URL, or the essay's markdown source (front matter
  // stripped). Falls back to a markdown link if the source can't be fetched.
  var share = rail.querySelector('.et-share');
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } finally { ta.remove(); }
    return Promise.resolve();
  }
  function flash(a, msg) {
    var old = a.getAttribute('data-label') || a.textContent;
    a.setAttribute('data-label', old);
    a.textContent = msg; a.classList.add('et-done');
    setTimeout(function () { a.textContent = old; a.classList.remove('et-done'); }, 1600);
  }
  if (share) share.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-copy]');
    if (!a) return;
    e.preventDefault();
    var url = share.getAttribute('data-url'), title = share.getAttribute('data-title');
    var link = '[' + title + '](' + url + ')';
    if (a.getAttribute('data-copy') === 'url') {
      copyText(url).then(function () { flash(a, 'Copied URL'); }, function () { flash(a, 'Copy failed'); });
      return;
    }
    var md = fetch(share.getAttribute('data-raw')).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) {
      t = t.replace(/^---[\s\S]*?\n---\s*\n/, '');
      return '# ' + title + '\n\n' + url + '\n\n' + t.trim() + '\n';
    }).catch(function () { return link; });
    var done = function () { flash(a, 'Copied markdown'); }, fail = function () { flash(a, 'Copy failed'); };
    // Safari needs the clipboard write to start inside the click.
    if (navigator.clipboard && window.ClipboardItem && window.isSecureContext) {
      navigator.clipboard.write([new ClipboardItem({ 'text/plain': md.then(function (t) { return new Blob([t], { type: 'text/plain' }); }) })])
        .then(done, function () { md.then(copyText).then(done, fail); });
    } else md.then(copyText).then(done, fail);
  });

  var footer = document.querySelector('.page__footer'), TOP = 96;
  var MINW = 180, MAXW = 260, GAP = 44, wideMode = null;
  function place() {
    var cr = content.getBoundingClientRect();
    var floor = 16;
    if (stMain) {
      var sr = stMain.getBoundingClientRect();
      floor = sr.left + Math.max(16, parseFloat(getComputedStyle(stMain).paddingLeft) || 0);
    }
    var room = cr.left - floor - GAP;
    var w = room >= MINW;
    if (w !== wideMode) {
      wideMode = w;
      root.classList.toggle('et-wide', w);
      root.classList.toggle('et-narrow', !w);
      setOpen(false);
    }
    if (w) {
      var width = Math.min(MAXW, room);
      rail.style.width = width + 'px';
      rail.style.left = (cr.left - GAP - width) + 'px';
    } else {
      rail.style.width = rail.style.left = rail.style.top = '';
    }
    update();
  }

  var active = -1;
  function update() {
    var cr = content.getBoundingClientRect();
    var total = cr.height - window.innerHeight;
    var p = total > 0 ? -cr.top / total : (cr.top < 0 ? 1 : 0);
    p = Math.max(0, Math.min(1, p));
    var n = Math.round(p * 100);
    fill.style.width = (p * 100) + '%';
    pct.textContent = tpct.textContent = n + '%';
    bar.setAttribute('aria-valuenow', n);
    // Like position:sticky: the rail slides up rather than covering the footer.
    if (wideMode && footer) {
      var ft = footer.getBoundingClientRect().top - (parseFloat(getComputedStyle(footer).marginTop) || 0);
      rail.style.top = Math.min(TOP, ft - rail.offsetHeight - 24) + 'px';
    }

    var line = Math.min(140, window.innerHeight * 0.3), cur = -1;
    for (var i = 0; i < heads.length; i++) {
      if (heads[i].getBoundingClientRect().top <= line) cur = i; else break;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && cr.bottom <= window.innerHeight) cur = heads.length - 1;
    if (cur !== active) {
      if (active >= 0) { links[active].classList.remove('et-active'); links[active].removeAttribute('aria-current'); }
      active = cur;
      if (cur >= 0) {
        var a = links[cur];
        a.classList.add('et-active');
        a.setAttribute('aria-current', 'location');
        // Keep the active entry visible inside a long rail without scrolling the page.
        var box = wideMode ? list.parentNode : rail;
        var top = a.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop;
        var bot = top + a.offsetHeight;
        if (top < box.scrollTop + 30) box.scrollTop = top - 30;
        else if (bot > box.scrollTop + box.clientHeight - 30) box.scrollTop = bot - box.clientHeight + 30;
      }
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; update(); });
  }, { passive: true });
  var t;
  function soon() { clearTimeout(t); t = setTimeout(place, 80); }
  window.addEventListener('resize', soon);
  window.addEventListener('load', soon);
  // The site menu and the sidenotes both move the text column around.
  document.addEventListener('transitionend', function (e) { if (e.target === stMain) soon(); });
  var navBtn = document.querySelector('.st-nav-toggle');
  if (navBtn) navBtn.addEventListener('click', function () { setTimeout(place, 320); });
  if (window.ResizeObserver) new ResizeObserver(soon).observe(content);
  requestAnimationFrame(place);
})();
