(function () {
  'use strict';

  var ICONS = {
    play: 'M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z',
    pause: 'M7 5h3.5v14H7zM13.5 5H17v14h-3.5z',
    skip: 'M12 5V2l-4 4 4 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z M10.2 15.8v-4.2l-1 .5v-1l1.5-.7h.6v5.4zm2.3-2.7c0-1.8.6-2.8 1.8-2.8s1.8 1 1.8 2.8-.6 2.8-1.8 2.8-1.8-1-1.8-2.8zm1 0c0 1.3.3 1.9.8 1.9s.8-.6.8-1.9-.3-1.9-.8-1.9-.8.6-.8 1.9z',
    volume: 'M4 9v6h4l5 4V5L8 9zm12.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z',
    muted: 'M4 9v6h4l5 4V5L8 9zm12.6 3 2.2-2.2-1.1-1.1-2.2 2.2-2.2-2.2-1.1 1.1 2.2 2.2-2.2 2.2 1.1 1.1 2.2-2.2 2.2 2.2 1.1-1.1z',
    transcript: 'M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5zM7 11v1.6h10V11zm0 3.5v1.6h10v-1.6zm0 3.5v1.6h7V18z',
    cc: 'M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 6.5H9.5V10h-2v4h2v-.5H11v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm7 0h-1.5V10h-2v4h2v-.5H18v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z',
    pip: 'M19 11h-8v6h8zm4 8V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2zm-2 0H3V5h18z',
    fullscreen: 'M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z',
    exitFullscreen: 'M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z'
  };
  var SPEEDS = [1, 1.25, 1.5, 2, 0.75];
  var IDLE_MS = 2500;
  var CAPTIONS_KEY = 'xp-captions';

  function svg(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + ICONS[name] + '"/></svg>';
  }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html) node.innerHTML = html;
    return node;
  }

  function button(className, label, icon) {
    var b = el('button', 'xp-btn ' + className, icon ? svg(icon) : '');
    b.type = 'button';
    b.setAttribute('aria-label', label);
    b.title = label;
    return b;
  }

  function setIcon(b, icon, label) {
    b.innerHTML = svg(icon);
    b.setAttribute('aria-label', label);
    b.title = label;
  }

  function clock(seconds) {
    if (!isFinite(seconds) || seconds < 0) seconds = 0;
    var s = Math.floor(seconds % 60), m = Math.floor(seconds / 60) % 60, h = Math.floor(seconds / 3600);
    var ss = s < 10 ? '0' + s : '' + s;
    if (h) return h + ':' + (m < 10 ? '0' + m : m) + ':' + ss;
    return m + ':' + ss;
  }

  function readPref(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v === null ? fallback : v === '1';
    } catch (e) {
      return fallback;
    }
  }

  function writePref(key, on) {
    try { localStorage.setItem(key, on ? '1' : '0'); } catch (e) { /* storage unavailable: keep the in-memory setting */ }
  }

  function trackCues(trackEl, done) {
    var track = trackEl.track;
    track.mode = 'hidden';
    if (track.cues && track.cues.length) return done(track);
    trackEl.addEventListener('load', function () { done(track); }, { once: true });
  }

  function Player(root) {
    var video = root.querySelector('video');
    if (!video || root.xpReady) return;
    root.xpReady = true;

    var captionEl = root.querySelector('track[kind="captions"],track[kind="subtitles"]');
    var chapterEl = root.querySelector('track[kind="chapters"]');
    var captionsOn = readPref(CAPTIONS_KEY, true);
    var chapters = [];
    var idleTimer = 0;
    var dragging = false;
    var lastPointer = 'mouse';
    var fullscreenApi = root.requestFullscreen || root.webkitRequestFullscreen;
    var nativeFullscreenOnly = !fullscreenApi && video.webkitEnterFullscreen;
    var pipSupported = document.pictureInPictureEnabled && !video.disablePictureInPicture;

    video.removeAttribute('controls');
    video.setAttribute('playsinline', '');
    root.tabIndex = 0;
    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', root.getAttribute('aria-label') || 'Video player');
    root.classList.add('xp-ready');

    var big = el('button', 'xp-big', svg('play'));
    big.type = 'button';
    big.setAttribute('aria-label', 'Play video');

    var cues = el('div', 'xp-cues');
    cues.setAttribute('aria-live', 'off');

    var chrome = el('div', 'xp-chrome');
    var progress = el('div', 'xp-progress');
    progress.tabIndex = 0;
    progress.setAttribute('role', 'slider');
    progress.setAttribute('aria-label', 'Seek');
    progress.setAttribute('aria-valuemin', '0');
    var rail = el('div', 'xp-rail');
    var buffered = el('div', 'xp-buffered');
    var played = el('div', 'xp-played');
    var thumb = el('div', 'xp-thumb');
    var tip = el('div', 'xp-tip');
    rail.append(buffered, played, thumb);
    progress.append(rail, tip);

    var bar = el('div', 'xp-bar');
    var playBtn = button('xp-play', 'Play (k)', 'play');
    var skipBtn = button('xp-skip', 'Forward 10 seconds (l)', 'skip');
    var vol = el('div', 'xp-vol');
    var muteBtn = button('xp-mute', 'Mute (m)', 'volume');
    var volRange = el('input');
    volRange.type = 'range';
    volRange.min = '0';
    volRange.max = '1';
    volRange.step = '0.05';
    volRange.value = String(video.volume);
    volRange.setAttribute('aria-label', 'Volume');
    vol.append(muteBtn, volRange);
    var time = el('span', 'xp-time', '0:00 / 0:00');
    var spacer = el('span', 'xp-spacer');
    var transcriptBtn = button('xp-transcript-btn', 'Transcript', 'transcript');
    var ccBtn = button('xp-cc', 'Captions (c)', 'cc');
    var speedBtn = button('xp-speed', 'Playback speed');
    speedBtn.textContent = '1×';
    var pipBtn = button('xp-pip', 'Picture in picture', 'pip');
    var fsBtn = button('xp-fs', 'Full screen (f)', 'fullscreen');

    bar.append(playBtn, skipBtn, vol, time, spacer);
    if (captionEl) bar.append(transcriptBtn, ccBtn);
    bar.append(speedBtn);
    if (pipSupported) bar.append(pipBtn);
    if (fullscreenApi || nativeFullscreenOnly) bar.append(fsBtn);
    chrome.append(progress, bar);
    root.append(cues, big, chrome);

    var panel = null;
    if (captionEl) {
      panel = el('div', 'xp-transcript');
      panel.hidden = true;
      panel.setAttribute('aria-label', 'Transcript');
      root.insertAdjacentElement('afterend', panel);
      transcriptBtn.setAttribute('aria-expanded', 'false');
    }

    function chapterAt(t) {
      for (var i = chapters.length - 1; i >= 0; i--) if (t >= chapters[i].startTime) return chapters[i];
      return null;
    }

    function renderTime() {
      var d = video.duration, t = video.currentTime;
      var pct = d ? (t / d) * 100 : 0;
      played.style.width = pct + '%';
      thumb.style.left = pct + '%';
      time.textContent = clock(t) + ' / ' + clock(d);
      progress.setAttribute('aria-valuemax', String(Math.floor(d || 0)));
      progress.setAttribute('aria-valuenow', String(Math.floor(t)));
      progress.setAttribute('aria-valuetext', clock(t) + ' of ' + clock(d));
    }

    function renderBuffered() {
      var d = video.duration, b = video.buffered;
      if (!d || !b.length) return;
      for (var i = 0; i < b.length; i++) {
        if (b.start(i) <= video.currentTime && video.currentTime <= b.end(i)) {
          buffered.style.width = (b.end(i) / d) * 100 + '%';
          return;
        }
      }
    }

    function renderPlay() {
      var paused = video.paused;
      setIcon(playBtn, paused ? 'play' : 'pause', paused ? 'Play (k)' : 'Pause (k)');
      root.classList.toggle('xp-paused', paused);
      if (paused) wake(true);
    }

    function renderVolume() {
      var quiet = video.muted || video.volume === 0;
      setIcon(muteBtn, quiet ? 'muted' : 'volume', quiet ? 'Unmute (m)' : 'Mute (m)');
      volRange.value = String(video.muted ? 0 : video.volume);
    }

    function renderCaptions() {
      ccBtn.setAttribute('aria-pressed', String(captionsOn));
      cues.hidden = !captionsOn;
      if (!captionsOn) cues.textContent = '';
      else showActiveCue();
    }

    function showActiveCue() {
      if (!captionsOn || !captionEl) return;
      var active = captionEl.track.activeCues;
      cues.textContent = '';
      if (!active) return;
      for (var i = 0; i < active.length; i++) {
        var span = el('span');
        span.textContent = active[i].text.replace(/<[^>]+>/g, '');
        cues.append(span);
        if (i < active.length - 1) cues.append(document.createElement('br'));
      }
      if (panel && !panel.hidden) highlightTranscript();
    }

    function wake(stay) {
      root.classList.remove('xp-idle');
      clearTimeout(idleTimer);
      if (!stay && !video.paused) idleTimer = setTimeout(sleep, IDLE_MS);
    }

    function sleep() {
      if (video.paused || dragging) return;
      root.classList.add('xp-idle');
    }

    function togglePlay() {
      if (video.paused || video.ended) {
        var p = video.play();
        if (p && p.catch) p.catch(function () { renderPlay(); });
      } else {
        video.pause();
      }
    }

    function seekBy(delta) {
      var d = video.duration || 0;
      video.currentTime = Math.max(0, Math.min(d, video.currentTime + delta));
      wake();
    }

    function ratioFromEvent(e) {
      var r = rail.getBoundingClientRect();
      return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    }

    function showTip(ratio) {
      var d = video.duration || 0, t = ratio * d;
      var c = chapterAt(t);
      tip.innerHTML = (c ? '<b></b>' : '') + '<span>' + clock(t) + '</span>';
      if (c) tip.firstChild.textContent = c.text;
      var w = progress.clientWidth, half = tip.offsetWidth / 2;
      tip.style.left = Math.max(half, Math.min(w - half, ratio * w)) + 'px';
    }

    function setCaptions(on) {
      captionsOn = on;
      writePref(CAPTIONS_KEY, on);
      renderCaptions();
    }

    function isFullscreen() {
      return (document.fullscreenElement || document.webkitFullscreenElement) === root;
    }

    function toggleFullscreen() {
      if (nativeFullscreenOnly) {
        if (captionEl) captionEl.track.mode = captionsOn ? 'showing' : 'hidden';
        video.webkitEnterFullscreen();
        return;
      }
      if (isFullscreen()) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } else {
        var p = fullscreenApi.call(root);
        if (p && p.catch) p.catch(function () { /* the browser refused; leave the page layout as it was */ });
      }
    }

    function togglePip() {
      if (document.pictureInPictureElement === video) document.exitPictureInPicture();
      else video.requestPictureInPicture().catch(function () { /* PiP refused, usually before metadata loads */ });
    }

    function cycleSpeed() {
      var i = SPEEDS.indexOf(video.playbackRate);
      video.playbackRate = SPEEDS[(i + 1) % SPEEDS.length];
      speedBtn.textContent = video.playbackRate + '×';
    }

    function buildTranscript(track) {
      var list = track.cues, chapterIndex = 0;
      for (var i = 0; i < list.length; i++) {
        var cue = list[i];
        while (chapterIndex < chapters.length && chapters[chapterIndex].startTime <= cue.startTime + 0.5) {
          var h = el('h4');
          h.textContent = chapters[chapterIndex].text;
          panel.append(h);
          chapterIndex++;
        }
        var line = el('button');
        line.type = 'button';
        line.xpStart = cue.startTime;
        line.xpEnd = cue.endTime;
        var stamp = el('time');
        stamp.textContent = clock(cue.startTime);
        var words = el('span');
        words.textContent = cue.text.replace(/<[^>]+>/g, '').replace(/\n/g, ' ');
        line.append(stamp, words);
        panel.append(line);
      }
    }

    function highlightTranscript() {
      var t = video.currentTime, lines = panel.querySelectorAll('button'), current = null;
      for (var i = 0; i < lines.length; i++) {
        var on = t >= lines[i].xpStart && t < lines[i].xpEnd;
        lines[i].classList.toggle('xp-on', on);
        if (on) current = lines[i];
      }
      if (current) {
        var top = current.offsetTop - panel.offsetTop;
        if (top < panel.scrollTop || top > panel.scrollTop + panel.clientHeight - current.offsetHeight) {
          panel.scrollTop = top - panel.clientHeight / 3;
        }
      }
    }

    function drawChapterMarks() {
      var d = video.duration;
      if (!d || !chapters.length || rail.querySelector('.xp-mark')) return;
      chapters.forEach(function (c) {
        if (c.startTime <= 0) return;
        var mark = el('div', 'xp-mark');
        mark.style.left = (c.startTime / d) * 100 + '%';
        rail.append(mark);
      });
    }

    var pendingTracks = (chapterEl ? 1 : 0) + (captionEl ? 1 : 0);
    function trackLoaded() {
      pendingTracks--;
      if (pendingTracks === 0 && panel) buildTranscript(captionEl.track);
    }
    if (chapterEl) {
      trackCues(chapterEl, function (track) {
        chapters = Array.prototype.slice.call(track.cues || []);
        drawChapterMarks();
        trackLoaded();
      });
    }
    if (captionEl) {
      trackCues(captionEl, function (track) {
        track.addEventListener('cuechange', showActiveCue);
        renderCaptions();
        trackLoaded();
      });
    }

    big.addEventListener('click', function (e) { e.stopPropagation(); togglePlay(); });
    playBtn.addEventListener('click', togglePlay);
    skipBtn.addEventListener('click', function () { seekBy(10); });
    muteBtn.addEventListener('click', function () {
      if (video.muted || video.volume === 0) { video.muted = false; if (video.volume === 0) video.volume = 0.6; }
      else video.muted = true;
    });
    volRange.addEventListener('input', function () {
      video.volume = Number(volRange.value);
      video.muted = video.volume === 0;
    });
    ccBtn.addEventListener('click', function () { setCaptions(!captionsOn); });
    transcriptBtn.addEventListener('click', function () {
      panel.hidden = !panel.hidden;
      transcriptBtn.setAttribute('aria-expanded', String(!panel.hidden));
      transcriptBtn.setAttribute('aria-pressed', String(!panel.hidden));
      if (!panel.hidden) highlightTranscript();
    });
    if (panel) {
      panel.addEventListener('click', function (e) {
        var line = e.target.closest('button');
        if (!line) return;
        video.currentTime = line.xpStart;
        if (video.paused) togglePlay();
      });
    }
    speedBtn.addEventListener('click', cycleSpeed);
    pipBtn.addEventListener('click', togglePip);
    fsBtn.addEventListener('click', toggleFullscreen);

    video.addEventListener('click', function () {
      if (lastPointer === 'touch' && root.classList.contains('xp-idle')) { wake(); return; }
      togglePlay();
    });
    video.addEventListener('dblclick', function () { if (lastPointer !== 'touch') toggleFullscreen(); });
    root.addEventListener('pointerdown', function (e) { lastPointer = e.pointerType || 'mouse'; }, true);
    root.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse') { lastPointer = 'mouse'; wake(); } });
    root.addEventListener('pointerleave', function () { if (!video.paused) sleep(); });
    root.addEventListener('focusin', function () { wake(); });

    progress.addEventListener('pointerdown', function (e) {
      dragging = true;
      progress.classList.add('xp-drag');
      progress.setPointerCapture(e.pointerId);
      var r = ratioFromEvent(e);
      showTip(r);
      video.currentTime = r * (video.duration || 0);
    });
    progress.addEventListener('pointermove', function (e) {
      var r = ratioFromEvent(e);
      showTip(r);
      if (dragging) video.currentTime = r * (video.duration || 0);
    });
    function endDrag() {
      dragging = false;
      progress.classList.remove('xp-drag');
      wake();
    }
    progress.addEventListener('pointerup', endDrag);
    progress.addEventListener('pointercancel', endDrag);
    progress.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        seekBy(e.key === 'ArrowLeft' ? -5 : 5);
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        video.currentTime = e.key === 'Home' ? 0 : video.duration || 0;
      }
    });

    root.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var onButton = e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT';
      lastPointer = 'keyboard';
      switch (e.key) {
        case ' ':
          if (onButton) return;
          e.preventDefault(); togglePlay(); break;
        case 'k': case 'K': togglePlay(); break;
        case 'j': case 'J': seekBy(-10); break;
        case 'l': case 'L': seekBy(10); break;
        case 'ArrowLeft': if (onButton) return; e.preventDefault(); seekBy(-5); break;
        case 'ArrowRight': if (onButton) return; e.preventDefault(); seekBy(5); break;
        case 'ArrowUp': if (onButton) return; e.preventDefault(); video.muted = false; video.volume = Math.min(1, video.volume + 0.1); break;
        case 'ArrowDown': if (onButton) return; e.preventDefault(); video.volume = Math.max(0, video.volume - 0.1); break;
        case 'm': case 'M': muteBtn.click(); break;
        case 'c': case 'C': if (captionEl) setCaptions(!captionsOn); break;
        case 'f': case 'F': toggleFullscreen(); break;
        default: return;
      }
      wake();
    });

    video.addEventListener('play', function () {
      root.classList.add('xp-started');
      document.querySelectorAll('.xp video').forEach(function (other) { if (other !== video && !other.paused) other.pause(); });
      renderPlay();
      wake();
    });
    video.addEventListener('pause', renderPlay);
    video.addEventListener('ended', renderPlay);
    video.addEventListener('timeupdate', renderTime);
    video.addEventListener('seeking', renderTime);
    video.addEventListener('progress', renderBuffered);
    video.addEventListener('loadedmetadata', function () { renderTime(); drawChapterMarks(); });
    video.addEventListener('durationchange', renderTime);
    video.addEventListener('volumechange', renderVolume);
    video.addEventListener('webkitendfullscreen', function () { if (captionEl) captionEl.track.mode = 'hidden'; });
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    function onFullscreenChange() {
      var on = isFullscreen();
      setIcon(fsBtn, on ? 'exitFullscreen' : 'fullscreen', on ? 'Exit full screen (f)' : 'Full screen (f)');
    }
    if (pipSupported) {
      video.addEventListener('enterpictureinpicture', function () { pipBtn.setAttribute('aria-pressed', 'true'); });
      video.addEventListener('leavepictureinpicture', function () { pipBtn.setAttribute('aria-pressed', 'false'); });
    }

    renderPlay();
    renderVolume();
    renderTime();
    if (captionEl) renderCaptions();
  }

  function init() {
    document.querySelectorAll('.xp').forEach(Player);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
