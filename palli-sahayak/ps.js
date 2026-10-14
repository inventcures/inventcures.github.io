/* Palli Sahayak page: conversation tabs and word-synced highlighting.
   The transcripts are rendered into the page; each word carries its start/end time (seconds into the
   conversation's audio track) and its phrase index, so the English phrase lights up with its native words. */
(function () {
  'use strict';

  function setupTabs(root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.ps-tab'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        panel.hidden = !on;
        if (!on) panel.querySelector('audio').pause();
      });
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        var step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!step) return;
        var next = tabs[(i + step + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  }

  function setupConversation(panel) {
    var audio = panel.querySelector('audio');
    var list = panel.querySelector('.ps-turns');
    var turns = Array.prototype.slice.call(panel.querySelectorAll('.ps-turn')).map(function (el) {
      return {
        el: el,
        start: parseFloat(el.dataset.start),
        end: parseFloat(el.dataset.end),
        words: Array.prototype.slice.call(el.querySelectorAll('.ps-w')).map(function (w) {
          return { el: w, s: parseFloat(w.dataset.s), e: parseFloat(w.dataset.e), c: w.dataset.c };
        }),
        chunks: Array.prototype.slice.call(el.querySelectorAll('.ps-ch'))
      };
    });
    var active = null, frame = 0;

    function clear(turn) {
      turn.el.classList.remove('is-active');
      turn.words.forEach(function (w) { w.el.classList.remove('on'); });
      turn.chunks.forEach(function (c) { c.classList.remove('on'); });
    }

    function render() {
      var t = audio.currentTime;
      var turn = null;
      for (var i = 0; i < turns.length; i++) {
        if (t >= turns[i].start && t < turns[i].end) { turn = turns[i]; break; }
      }
      if (turn !== active) {
        if (active) clear(active);
        active = turn;
        if (turn) {
          turn.el.classList.add('is-active');
          var top = turn.el.offsetTop - list.offsetTop - 12;
          if (top < list.scrollTop || top + turn.el.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = top;
        }
      }
      if (!turn) return;
      var chunk = null;
      turn.words.forEach(function (w) {
        var on = t >= w.s && t < w.e + 0.08;
        w.el.classList.toggle('on', on);
        if (t >= w.s) chunk = w.c;
      });
      turn.chunks.forEach(function (c) { c.classList.toggle('on', c.dataset.c === chunk); });
    }

    function loop() {
      render();
      if (!audio.paused) frame = requestAnimationFrame(loop);
    }

    audio.addEventListener('play', function () {
      document.querySelectorAll('.ps audio, .ps video').forEach(function (m) { if (m !== audio && !m.paused) m.pause(); });
      cancelAnimationFrame(frame);
      loop();
    });
    audio.addEventListener('pause', function () { cancelAnimationFrame(frame); render(); });
    audio.addEventListener('seeked', render);
    turns.forEach(function (turn) {
      turn.el.addEventListener('click', function () {
        audio.currentTime = turn.start + 0.01;
        audio.play();
      });
      turn.el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); turn.el.click(); }
      });
    });
  }

  function init() {
    var root = document.querySelector('.ps-convs');
    if (!root) return;
    setupTabs(root);
    root.querySelectorAll('.ps-conv').forEach(setupConversation);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
