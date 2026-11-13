(function () {
  'use strict';

  const AUTOPLAY_SPEED = 1.2;
  const TRANSITION_MS  = 450;
  const DRAG_THRESHOLD = 30;
  const MOBILE_BP      = 768;
  const START_INDEX    = 3;

  document.addEventListener('DOMContentLoaded', init);
  if (document.readyState !== 'loading') init();

  function init() {
    const wrapper = document.querySelector('.agents-mentors-wrapper');
    if (wrapper && !wrapper._sliderInit) {
      wrapper._sliderInit = true;
      initSlider(wrapper);
    }
  }

  function initSlider(wrapper) {
    const track      = wrapper.querySelector('.agents-mentors-list');
    const navigation = document.querySelector('.agents-mentors-navigation');
    const btnPrev    = document.querySelector('.agents-mentors-prev-button');
    const btnNext    = document.querySelector('.agents-mentors-next-button');
    const originals  = Array.from(wrapper.querySelectorAll('[class*="ambassador-coach-card"]'));

    if (!track || originals.length === 0) return;

    if (window.innerWidth < MOBILE_BP) return;

    const COUNT = originals.length;

    originals.forEach(s => {
      const a = s.cloneNode(true); a.setAttribute('aria-hidden', 'true');
      const b = s.cloneNode(true); b.setAttribute('aria-hidden', 'true');
      track.insertBefore(a, originals[0]);
      track.appendChild(b);
    });

    let SW      = 0;
    let CSW     = 0;
    let offset  = 0;
    let rafId   = null;
    let playing = false;
    let visible = false;
    let animating = false;

    const drag = { on: false, x0: 0, dx: 0, t0: 0 };

    function measure() {
      const all = track.querySelectorAll('[class*="ambassador-coach-card"]');
      SW    = all[0] ? all[0].getBoundingClientRect().width : 0;
      CSW   = SW * COUNT;
      offset = CSW + START_INDEX * SW;
      move(offset, false);
    }

    function normLive(v) {
      if (v >= CSW * 2) return v - CSW;
      if (v < CSW)      return v + CSW;
      return v;
    }

    function move(px, anim = true) {
      track.style.transition = anim
        ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`
        : 'none';
      track.style.transform = `translateX(${-px}px)`;
    }

    function snap(v) {
      if (SW === 0) return v;
      return Math.round((v - CSW) / SW) * SW + CSW;
    }

    function goTo(target, done) {
      while (target >= CSW * 2) target -= CSW;
      while (target < CSW)      target += CSW;
      animating = true;
      offset    = target;
      move(offset, true);
      setTimeout(() => { animating = false; if (done) done(); }, TRANSITION_MS);
    }

    function next() {
      if (animating) return;
      stopAuto();
      goTo(snap(offset) + SW, () => startAuto());
    }

    function prev() {
      if (animating) return;
      stopAuto();
      goTo(snap(offset) - SW, () => startAuto());
    }

    if (navigation) {
      navigation.addEventListener('click', e => {
        if (e.target.closest('.agents-mentors-prev-button')) { prev(); return; }
        if (e.target.closest('.agents-mentors-next-button')) { next(); return; }
      });
    } else {
      if (btnPrev) btnPrev.addEventListener('click', prev);
      if (btnNext) btnNext.addEventListener('click', next);
    }

    if (btnPrev) btnPrev.classList.add('is-active');
    if (btnNext) btnNext.classList.add('is-active');

    function autoTick() {
      if (!visible || !playing) return;
      offset += AUTOPLAY_SPEED;
      if (offset >= CSW * 2) offset -= CSW;
      track.style.transition = 'none';
      track.style.transform  = `translateX(${-offset}px)`;
      rafId = requestAnimationFrame(autoTick);
    }

    function startAuto() {
      if (!visible || playing) return;
      playing = true;
      rafId   = requestAnimationFrame(autoTick);
    }

    function stopAuto() {
      playing = false;
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    wrapper.addEventListener('mouseenter', () => stopAuto());
    wrapper.addEventListener('mouseleave', () => { if (!drag.on) startAuto(); });

    wrapper.addEventListener('mousedown', e => {
      if (e.button !== 0 || e.target.closest('.agents-mentors-navigation') || animating) return;
      drag.on = true; drag.x0 = e.clientX; drag.dx = 0; drag.t0 = Date.now();
      track.style.transition = 'none';
      stopAuto();
    });

    window.addEventListener('mousemove', e => {
      if (!drag.on) return;
      e.preventDefault();
      drag.dx = e.clientX - drag.x0;
      track.style.transform = `translateX(${-normLive(offset - drag.dx)}px)`;
    });

    window.addEventListener('mouseup', () => {
      if (!drag.on) return;
      drag.on = false;
      const abs = Math.abs(drag.dx);
      const vel = abs / (Date.now() - drag.t0);
      offset = normLive(offset - drag.dx);
      const s = snap(offset);
      if (abs > DRAG_THRESHOLD || vel > 0.2) {
        goTo(drag.dx < 0 ? s + SW : s - SW, () => startAuto());
      } else {
        goTo(s, () => startAuto());
      }
    });

    let rt = null;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (window.innerWidth < MOBILE_BP) { stopAuto(); return; }
        stopAuto();
        measure();
        startAuto();
      }, 150);
    });

    new IntersectionObserver(entries => {
      entries.forEach(e => {
        visible = e.isIntersecting;
        if (visible) startAuto(); else stopAuto();
      });
    }, { threshold: 0.1 }).observe(wrapper);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAuto();
      else if (visible) startAuto();
    });

    let booted = false;
    let ro = null;

    function boot() {
      if (booted) return;
      const all = track.querySelectorAll('[class*="ambassador-coach-card"]');
      const w   = all[0] ? all[0].getBoundingClientRect().width : 0;
      if (w < 10) return;
      booted = true;
      if (ro) ro.disconnect();
      measure();
    }

    if (window.ResizeObserver) {
      ro = new ResizeObserver(boot);
      ro.observe(track);
    }

    setTimeout(() => {
      if (!booted) { booted = true; if (ro) ro.disconnect(); measure(); }
    }, 1500);
  }

})();
