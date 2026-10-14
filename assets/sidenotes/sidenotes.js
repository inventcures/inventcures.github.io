// Margin notes for long-form pages.
// Markup: put data-sidenotes on the content container and data-sidenotes-list on the
// element holding the reference list. Every <sup><a href="#id"> whose target is an <li>
// in that list becomes a note in the right margin when there is room, and a tap-to-open
// note under its paragraph when there is not. Add data-sidenotes-toc to also get a
// sticky contents list in the left margin, built from a nav.sn-toc inside the container
// or, failing that, from the container's h2 headings. A page that places its own notes
// can leave out data-sidenotes-list and still get the contents list.
(function () {
  'use strict';

  var GAP = 36;
  var NOTE_MAX = 280;
  var NOTE_MIN = 190;
  var TOC_MAX = 220;
  var TOC_MIN = 160;
  var EDGE = 20;

  function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function init(root) {
    var list = document.querySelector('[data-sidenotes-list]');
    if (!list && !root.hasAttribute('data-sidenotes-toc')) return;

    var refs = !list ? [] : Array.prototype.slice.call(root.querySelectorAll('sup a[href^="#"]')).filter(function (a) {
      var target = document.getElementById(a.getAttribute('href').slice(1));
      return target && target.tagName === 'LI' && list.contains(target) && !list.contains(a);
    });

    root.classList.add('sn-root');
    var rail = document.createElement('div');
    rail.className = 'sn-rail';
    rail.setAttribute('aria-hidden', 'true');
    root.appendChild(rail);

    function noteHtml(ref) {
      var id = ref.getAttribute('href').slice(1);
      var copy = document.getElementById(id).cloneNode(true);
      copy.querySelectorAll('.backref').forEach(function (b) { b.remove(); });
      var n = ref.textContent.trim();
      return '<span class="sn-num">' + n + '</span>' + copy.innerHTML.trim() +
        ' <a class="sn-jump" href="#' + id + '" aria-label="Reference ' + n + ' in the list">↓</a>';
    }

    var notes = refs.map(function (ref) {
      var note = document.createElement('p');
      note.className = 'sn-note';
      note.innerHTML = noteHtml(ref);
      rail.appendChild(note);
      function on() { note.classList.add('is-active'); ref.classList.add('is-active'); }
      function off() { note.classList.remove('is-active'); ref.classList.remove('is-active'); }
      [note, ref].forEach(function (el) {
        el.addEventListener('mouseenter', on);
        el.addEventListener('mouseleave', off);
      });
      ref.addEventListener('click', function (e) {
        if (root.classList.contains('sn-wide')) return;
        e.preventDefault();
        var sup = ref.parentNode;
        var open = sup.nextElementSibling;
        if (open && open.classList.contains('sn-inline')) {
          open.remove();
          ref.setAttribute('aria-expanded', 'false');
          return;
        }
        var box = document.createElement('span');
        box.className = 'sn-inline';
        box.innerHTML = noteHtml(ref);
        sup.insertAdjacentElement('afterend', box);
        ref.setAttribute('aria-expanded', 'true');
      });
      return note;
    });

    var tocRail = null, tocLinks = [], tocTargets = [];
    if (root.hasAttribute('data-sidenotes-toc')) {
      var nav = root.querySelector('nav.sn-toc');
      if (!nav) {
        nav = document.createElement('nav');
        nav.className = 'sn-toc';
        nav.setAttribute('aria-label', 'On this page');
        var items = Array.prototype.slice.call(root.querySelectorAll('h2')).map(function (h) {
          if (!h.id) h.id = slug(h.textContent);
          return '<li><a href="#' + h.id + '">' + h.textContent.trim() + '</a></li>';
        });
        nav.innerHTML = '<p class="sn-toc-title">On this page</p><ol>' + items.join('') + '</ol>';
      }
      tocRail = document.createElement('div');
      tocRail.className = 'sn-toc-rail';
      tocRail.appendChild(nav);
      root.appendChild(tocRail);
      tocLinks = Array.prototype.slice.call(nav.querySelectorAll('a'));
      tocTargets = tocLinks.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    }

    function layout() {
      var box = root.getBoundingClientRect();
      var style = getComputedStyle(root);
      var contentLeft = parseFloat(style.paddingLeft);
      var contentRight = box.width - parseFloat(style.paddingRight);
      var viewport = document.documentElement.clientWidth;

      var noteWidth = Math.min(NOTE_MAX, viewport - (box.left + contentRight + GAP) - EDGE);
      var wide = refs.length > 0 && noteWidth >= NOTE_MIN;
      root.classList.toggle('sn-wide', wide);
      if (wide) {
        rail.style.left = (contentRight + GAP) + 'px';
        rail.style.width = noteWidth + 'px';
        var origin = rail.getBoundingClientRect().top;
        var floor = 0;
        refs.forEach(function (ref, i) {
          var top = Math.max(ref.getBoundingClientRect().top - origin - 3, floor);
          notes[i].style.top = top + 'px';
          floor = top + notes[i].offsetHeight + 14;
        });
      }

      if (tocRail) {
        var tocWidth = Math.min(TOC_MAX, box.left + contentLeft - GAP - EDGE);
        var tocOn = tocWidth >= TOC_MIN;
        root.classList.toggle('sn-toc-on', tocOn);
        if (tocOn) {
          tocRail.style.left = (contentLeft - GAP - tocWidth) + 'px';
          tocRail.style.width = tocWidth + 'px';
        }
      }
    }

    function markCurrent() {
      if (!tocLinks.length) return;
      var current = 0;
      tocTargets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top < window.innerHeight * 0.3) current = i; });
      tocLinks.forEach(function (a, i) { a.classList.toggle('is-current', i === current); });
    }

    window.addEventListener('resize', layout);
    window.addEventListener('load', layout);
    window.addEventListener('scroll', markCurrent, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
    if (window.ResizeObserver) new ResizeObserver(layout).observe(root);
    layout();
    markCurrent();
  }

  function start() {
    document.querySelectorAll('[data-sidenotes]').forEach(init);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
