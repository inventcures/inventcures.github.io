(() => {
  'use strict';

  const script = document.querySelector('script[data-paper-previews]');
  const scope = document.querySelector('[data-paper-preview-scope]');
  if (!script || !scope) return;

  const normalize = (href) => {
    const url = new URL(href, window.location.href);
    url.hash = '';
    return url.href.replace(/\/$/, '');
  };

  async function initialize() {
    const response = await fetch(script.dataset.paperPreviews);
    if (!response.ok) throw new Error('Paper previews could not be loaded.');
    const papers = await response.json();
    if (!Array.isArray(papers)) throw new Error('Invalid paper preview data.');
    const byUrl = new Map();
    for (const paper of papers) {
      if (!paper || !Array.isArray(paper.urls) || typeof paper.title !== 'string' ||
          typeof paper.summary !== 'string') continue;
      for (const url of paper.urls) {
        if (typeof url !== 'string') continue;
        try { byUrl.set(normalize(url), paper); } catch (error) {
          console.warn('A paper preview URL was skipped.', error);
        }
      }
    }

    const panel = document.createElement('div');
    panel.id = 'clinical-paper-preview';
    panel.className = 'paper-preview';
    panel.setAttribute('role', 'tooltip');
    panel.hidden = true;
    const label = document.createElement('div');
    label.className = 'paper-preview-label';
    const title = document.createElement('div');
    title.className = 'paper-preview-title';
    const summary = document.createElement('p');
    summary.className = 'paper-preview-summary';
    panel.append(label, title, summary);
    document.body.append(panel);
    let active = null;
    let pinned = false;
    let hideTimer;

    function dismiss() {
      clearTimeout(hideTimer);
      if (active) {
        active.button.setAttribute('aria-expanded', 'false');
        active.link.removeAttribute('aria-describedby');
        active.button.removeAttribute('aria-describedby');
      }
      panel.hidden = true;
      active = null;
      pinned = false;
    }

    function position() {
      if (!active) return;
      const margin = 12;
      const rect = active.button.getBoundingClientRect();
      const height = window.innerHeight;
      const below = rect.bottom + 8;
      const top = below + panel.offsetHeight <= height - margin ? below : rect.top - panel.offsetHeight - 8;
      panel.style.left = `${Math.max(margin, Math.min(rect.left, window.innerWidth - panel.offsetWidth - margin))}px`;
      panel.style.top = `${Math.max(margin, Math.min(top, height - panel.offsetHeight - margin))}px`;
    }

    function show(entry) {
      clearTimeout(hideTimer);
      if (active !== entry) {
        dismiss();
        active = entry;
        label.textContent = entry.paper.label || 'Abstract summary';
        title.textContent = entry.paper.title;
        summary.textContent = entry.paper.summary;
        panel.scrollTop = 0;
      }
      panel.hidden = false;
      entry.button.setAttribute('aria-expanded', 'true');
      entry.link.setAttribute('aria-describedby', panel.id);
      entry.button.setAttribute('aria-describedby', panel.id);
      position();
    }

    function scheduleDismiss() {
      clearTimeout(hideTimer);
      if (!pinned) hideTimer = window.setTimeout(() => {
        if (active && !active.link.matches(':focus') && !active.button.matches(':focus')) dismiss();
      }, 200);
    }

    for (const link of scope.querySelectorAll('a[href]')) {
      const paper = byUrl.get(normalize(link.href));
      if (!paper) continue;
      const button = document.createElement('button');
      const overview = paper.label === 'Essay overview' || paper.label === 'Perspective overview';
      button.type = 'button';
      button.className = 'paper-preview-button';
      button.textContent = overview ? 'Overview' : 'Abstract';
      button.setAttribute('aria-label', `${overview ? 'Show overview' : 'Show abstract summary'}: ${paper.title}`);
      button.setAttribute('aria-controls', panel.id);
      button.setAttribute('aria-expanded', 'false');
      link.after(button);
      const entry = { link, button, paper };
      for (const element of [link, button]) {
        element.addEventListener('pointerenter', (event) => {
          if (event.pointerType !== 'touch' && !pinned) show(entry);
        });
        element.addEventListener('pointerleave', (event) => {
          if (event.pointerType !== 'touch') scheduleDismiss();
        });
        element.addEventListener('focus', () => show(entry));
        element.addEventListener('blur', scheduleDismiss);
      }
      button.addEventListener('click', () => {
        if (active === entry && pinned) dismiss();
        else { show(entry); pinned = true; }
      });
    }

    panel.addEventListener('pointerenter', () => clearTimeout(hideTimer));
    panel.addEventListener('pointerleave', scheduleDismiss);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') dismiss(); });
    document.addEventListener('click', (event) => {
      if (active && !panel.contains(event.target) && !active.button.contains(event.target) &&
          !active.link.contains(event.target)) dismiss();
    });
    window.addEventListener('resize', position);
    window.addEventListener('scroll', () => { if (pinned) position(); else dismiss(); }, { passive: true });
  }

  initialize().catch((error) => console.warn('Paper previews are unavailable; paper links still work.', error));
})();
