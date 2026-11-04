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
  // Keep campaign tags (utm_*, ref) out of the page path, so "/?utm_source=x"
  // counts as "/". GoatCounter still records them as referrer/campaign.
  window.goatcounter = window.goatcounter || {};
  window.goatcounter.path = function (p) {
    var q = location.search.replace(/^\?/, '').split('&').filter(function (kv) {
      return kv && !/^(utm_[a-z]+|ref)=/i.test(kv);
    }).join('&');
    return location.pathname + (q ? '?' + q : '');
  };
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
