// Turns kramdown footnotes into right-margin sidenotes on wide screens,
// and tap-to-open inline notes on narrow screens.
(function () {
  var content = document.querySelector('.page__content');
  var main = document.getElementById('main');
  if (!content || !main) return;
  var foot = content.querySelector('.footnotes');
  if (!foot) return;
  var refs = Array.prototype.slice.call(content.querySelectorAll('sup[role="doc-noteref"]'));
  if (!refs.length) return;
  document.documentElement.classList.add('sn-js');

  var GAP = 32, NOTE = 260, MINLEFT = 80;
  function noteHTML(ref) {
    var a = ref.querySelector('a');
    var id = decodeURIComponent(a.getAttribute('href').slice(1));
    var li = document.getElementById(id);
    if (!li) return null;
    var c = li.cloneNode(true);
    Array.prototype.forEach.call(c.querySelectorAll('.reversefootnote'), function (x) { x.remove(); });
    return '<span class="sn-num">' + a.textContent + '</span>' + c.innerHTML.replace(/(&nbsp;| )+\s*$/, '');
  }
  var notes = refs.map(function (ref) {
    var n = document.createElement('aside');
    n.className = 'sn-note';
    n.innerHTML = noteHTML(ref) || '';
    n.setAttribute('role', 'note');
    return n;
  });

  var mode = null;
  function blockOf(el) {
    var b = el;
    while (b.parentElement && b.parentElement !== content &&
           !/^(P|LI|BLOCKQUOTE|TD)$/.test(b.tagName)) b = b.parentElement;
    return b;
  }
  function wide() { return window.innerWidth >= 1100; }

  function layout() {
    var w = wide();
    if (w !== mode) {
      mode = w;
      document.documentElement.classList.toggle('sn-wide', w);
      notes.forEach(function (n) { n.remove(); n.className = 'sn-note' + (w ? ' sn-margin' : ' sn-inline'); });
      if (w) notes.forEach(function (n) { main.appendChild(n); });
      else main.style.transform = '';
    }
    if (!w) return;
    // Make room on the right by nudging the column left when needed.
    main.style.transform = '';
    var mr = main.getBoundingClientRect();
    var right = window.innerWidth - mr.right;
    var need = GAP + NOTE + 24;
    if (right < need) {
      var shift = Math.min(need - right, Math.max(0, mr.left - MINLEFT));
      main.style.transform = 'translateX(' + (-shift) + 'px)';
      mr = main.getBoundingClientRect();
      right = window.innerWidth - mr.right;
    }
    var width = Math.max(170, Math.min(NOTE, right - GAP - 24));
    main.style.setProperty('--sn-width', width + 'px');
    var cr = content.getBoundingClientRect();
    var left = cr.right - mr.left + GAP;
    var lastBottom = -Infinity;
    refs.forEach(function (ref, i) {
      var n = notes[i];
      var top = ref.getBoundingClientRect().top - mr.top - 4;
      top = Math.max(top, lastBottom + 12);
      n.style.left = left + 'px';
      n.style.top = top + 'px';
      lastBottom = top + n.offsetHeight;
    });
  }

  refs.forEach(function (ref, i) {
    ref.querySelector('a').addEventListener('click', function (e) {
      e.preventDefault();
      var n = notes[i];
      if (mode) {
        n.classList.add('sn-flash');
        setTimeout(function () { n.classList.remove('sn-flash'); }, 900);
        return;
      }
      if (n.parentNode) { n.remove(); return; }
      var b = blockOf(ref);
      b.parentNode.insertBefore(n, b.nextSibling);
    });
  });

  var t;
  function soon() { clearTimeout(t); t = setTimeout(layout, 60); }
  window.addEventListener('resize', soon);
  window.addEventListener('load', layout);
  Array.prototype.forEach.call(content.querySelectorAll('img'), function (im) { if (!im.complete) im.addEventListener('load', soon); });
  if (window.ResizeObserver) new ResizeObserver(soon).observe(content);
  if (window.MathJax && MathJax.startup && MathJax.startup.promise) MathJax.startup.promise.then(soon);
  layout();
})();
