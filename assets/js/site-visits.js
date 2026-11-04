---
layout: null
sitemap: false
---
// Loads GoatCounter on every page that includes this file. GoatCounter is a
// cookie-free counter: it records the path, referrer, browser, screen size and
// country, but never stores the visitor's IP address.
(function () {
  var code = {{ site.visitor_stats.goatcounter_code | default: "" | jsonify }};
  if (!code || window.__siteVisitsLoaded) return;
  window.__siteVisitsLoaded = true;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
