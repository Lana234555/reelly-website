
(function () {
  'use strict';

  const API = 'https://api-reelly.up.railway.app/api/public/stats';
  const fmt = n => Number(n).toLocaleString('en-US'); // 66204 -> "66,204"

  function apply(stats) {
    document.querySelectorAll('.fs-numbercount_number').forEach(el => {
      const block = el.closest('.agent-grid-number-block') || el.parentElement;
      const label = (block ? block.textContent : '').toLowerCase();

      let val = null;
      if (label.includes('agent'))                                val = stats.agents;
      else if (label.includes('off-plan') || label.includes('project')) val = stats.projects;
      if (val == null) return;

      el.textContent = fmt(val);
      el.setAttribute('data-stat-loaded', '1');
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  fetch(API, { cache: 'no-store' })
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(stats => ready(() => apply(stats)))
    .catch(err => console.warn('[hero-stats] fetch failed:', err));
})();
