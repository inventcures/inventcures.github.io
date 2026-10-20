// Open every link in a new tab, except in-page anchors, downloads and
// non-web schemes (mailto:, tel:, javascript:). Links that already set a
// target are left alone. Runs once on load and again at click time, so
// links added later by page scripts are covered too.
(function () {
  function shouldOpenInNewTab(a) {
    if (a.hasAttribute('target') || a.hasAttribute('download')) return false;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return false;
    var url;
    try { url = new URL(a.href, location.href); } catch (e) { return false; }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    var samePage = url.origin === location.origin && url.pathname === location.pathname && url.search === location.search;
    return !(samePage && url.hash);
  }

  function decorate(a) {
    if (!shouldOpenInNewTab(a)) return;
    a.target = '_blank';
    var rel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
    ['noopener', 'noreferrer'].forEach(function (r) { if (rel.indexOf(r) < 0) rel.push(r); });
    a.setAttribute('rel', rel.join(' '));
  }

  function decorateAll() {
    Array.prototype.forEach.call(document.querySelectorAll('a[href]'), decorate);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorateAll);
  else decorateAll();

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a) decorate(a);
  }, true);
})();
