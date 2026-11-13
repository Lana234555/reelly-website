(function () {
  'use strict';

  const AUTOPLAY_DURATION = 6000;
  const SLIDE_SPEED       = 900;
  const TEXT_FADE_OUT     = 400;
  const TEXT_FADE_IN      = 700;
  const SWIPE_THRESHOLD   = 48;
  const SWIPE_AXIS_LOCK   = 1.2;

  function initSlider(root) {
    const track     = root.querySelector('.agents-slider-track');
    const slides    = Array.from(root.querySelectorAll('.agents-slider-slide'));
    const prevBtn   = root.querySelector('.agents-slider-prev');
    const nextBtn   = root.querySelector('.agents-slider-next');

    const sliderBlock = root.closest('.agents-slider-block') || root.parentElement;
    const progressC   = sliderBlock ? sliderBlock.querySelector('.agents-slider-progress') : null;
    const copyItems   = sliderBlock ? Array.from(sliderBlock.querySelectorAll('.agents-slider-copy-inner')) : [];

    if (!track || slides.length < 1 || !progressC) return;

    const total       = slides.length;
    let current       = 0;
    let locked        = false;
    let autoTimer     = null;
    let fillRaf       = null;
    let fillStart     = null;
    let everNavigated = false;
    let isVisible     = false;

    if (prevBtn) { prevBtn.setAttribute('aria-label', 'Previous slide'); prevBtn.style.visibility = 'hidden'; }
    if (nextBtn) nextBtn.setAttribute('aria-label', 'Next slide');

    progressC.innerHTML = '';
    const indicators = slides.map((_, i) => {
      const btn  = document.createElement('button');
      const fill = document.createElement('span');
      btn.type = 'button';
      btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
      btn.setAttribute('aria-current', i === 0 ? 'true' : 'false');
      btn.className  = 'agents-slider-progress-item';
      fill.className = 'agents-slider-progress-fill';
      btn.appendChild(fill);
      progressC.appendChild(btn);
      btn.addEventListener('click', () => navigate(i, 'manual'));
      return { btn, fill };
    });

    Object.assign(track.style, { position: 'relative', width: '100%' });

    slides.forEach((slide, i) => {
      Object.assign(slide.style, {
        position      : i === 0 ? 'relative' : 'absolute',
        top           : '0', left: '0', width: '100%',
        opacity       : i === 0 ? '1' : '0',
        transform     : i === 0 ? 'translateY(0px) scale(1)' : 'translateY(80px) scale(0.96)',
        zIndex        : i === 0 ? '2' : '1',
        transition    : 'none',
        filter        : 'brightness(1)',
        pointerEvents : i === 0 ? 'all' : 'none',
        willChange    : 'transform, opacity, filter',
      });
      const btn = slide.querySelector('.agents-hero-button-block');
      if (btn) {
        btn.style.pointerEvents = 'all';
        btn.querySelectorAll('*').forEach(el => el.style.pointerEvents = 'all');
      }
    });

    const stage = root.querySelector('.agents-slider-stage');
    if (stage) { stage.style.position = 'relative'; stage.style.overflow = 'hidden'; }

    copyItems.forEach((inner, i) => {
      inner.style.transition    = 'none';
      inner.style.opacity       = i === 0 ? '1' : '0';
      inner.style.pointerEvents = i === 0 ? 'all' : 'none';
      inner.style.zIndex        = i === 0 ? '2' : '1';
      if (i !== 0) {
        inner.style.position = 'absolute';
        inner.style.top = '0'; inner.style.left = '0'; inner.style.width = '100%';
      }
    });

    const copyWrap = sliderBlock ? sliderBlock.querySelector('.agents-slider-copy') : null;
    if (copyWrap) copyWrap.style.position = 'relative';

    function syncIndicators(index) {
      indicators.forEach(({ btn }, i) => btn.setAttribute('aria-current', i === index ? 'true' : 'false'));
    }

    function stopFill() { if (fillRaf) { cancelAnimationFrame(fillRaf); fillRaf = null; } }

    function resetAllFills() {
      indicators.forEach(({ fill }) => { fill.style.transition = 'none'; fill.style.width = '0%'; });
    }

    function startFill(index) {
      if (!isVisible) return;
      stopFill();
      resetAllFills();
      const fill = indicators[index].fill;
      void fill.offsetWidth;
      fillStart = performance.now();
      function tick(now) {
        const pct = Math.min(((now - fillStart) / AUTOPLAY_DURATION) * 100, 100);
        fill.style.width = pct + '%';
        if (pct < 100) fillRaf = requestAnimationFrame(tick);
      }
      fillRaf = requestAnimationFrame(tick);
    }

    function navigate(toIndex, source) {
      if (locked) return;
      const next = ((toIndex % total) + total) % total;
      if (next === current && source !== 'init') return;
      locked = true;

      const prevIndex = current;
      current = next;

      if (!everNavigated) {
        everNavigated = true;
        if (prevBtn) prevBtn.style.visibility = 'visible';
      }

      const prevSlide = slides[prevIndex];
      const nextSlide = slides[current];

      slides.forEach(s => {
        s.style.pointerEvents = 'none';
        const btn = s.querySelector('.agents-hero-button-block');
        if (btn) {
          btn.style.pointerEvents = 'all';
          btn.querySelectorAll('*').forEach(el => el.style.pointerEvents = 'all');
        }
      });

      nextSlide.style.position = 'relative';
      prevSlide.style.position = 'absolute';

      nextSlide.style.transition = 'none';
      nextSlide.style.opacity    = '0';
      nextSlide.style.transform  = 'translateY(80px) scale(0.96)';
      nextSlide.style.filter     = 'brightness(0.7)';
      nextSlide.style.zIndex     = '3';
      void nextSlide.offsetWidth;

      const trans = `opacity ${SLIDE_SPEED}ms cubic-bezier(0.25,0.46,0.45,0.94), transform ${SLIDE_SPEED}ms cubic-bezier(0.25,0.46,0.45,0.94), filter ${SLIDE_SPEED}ms ease`;
      nextSlide.style.transition = trans;
      nextSlide.style.opacity    = '1';
      nextSlide.style.transform  = 'translateY(0px) scale(1)';
      nextSlide.style.filter     = 'brightness(1)';

      prevSlide.style.transition = trans;
      prevSlide.style.opacity    = '0';
      prevSlide.style.transform  = 'translateY(-40px) scale(0.94)';
      prevSlide.style.filter     = 'brightness(0.5)';
      prevSlide.style.zIndex     = '1';

      setTimeout(() => {
        prevSlide.style.zIndex = '1';
        nextSlide.style.zIndex = '2';
        prevSlide.style.pointerEvents = 'none';
        nextSlide.style.pointerEvents = 'all';

        const nb = nextSlide.querySelector('.agents-hero-button-block');
        if (nb) {
          nb.style.pointerEvents = 'all';
          nb.querySelectorAll('*').forEach(el => el.style.pointerEvents = 'all');
        }

        locked = false;
      }, SLIDE_SPEED + 50);

      const oldInner = copyItems[prevIndex];
      const newInner = copyItems[current];
      if (oldInner) { oldInner.style.transition = `opacity ${TEXT_FADE_OUT}ms ease`; oldInner.style.opacity = '0'; }
      setTimeout(() => {
        if (newInner) {
          newInner.style.transition = 'none';
          newInner.style.opacity    = '0';
          void newInner.offsetWidth;
          newInner.style.transition = `opacity ${TEXT_FADE_IN}ms ease`;
          newInner.style.opacity    = '1';
          copyItems.forEach(inner => inner.style.pointerEvents = 'none');
          newInner.style.pointerEvents = 'all';
          copyItems.forEach(inner => inner.style.zIndex = '1');
          newInner.style.zIndex = '2';
        }
      }, TEXT_FADE_OUT + 50);

      syncIndicators(current);
      startFill(current);
      resetAutoplay();
    }

    function startAutoplay() {
      stopAutoplay();
      autoTimer = setInterval(() => { if (!locked && isVisible) navigate((current + 1) % total, 'auto'); }, AUTOPLAY_DURATION);
    }
    function stopAutoplay() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }

    new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) { startFill(current); startAutoplay(); }
      else { stopFill(); stopAutoplay(); }
    }, { threshold: 0.3 }).observe(root);

    if (prevBtn) prevBtn.addEventListener('click', () => navigate(((current - 1) + total) % total, 'manual'));
    if (nextBtn) nextBtn.addEventListener('click', () => navigate((current + 1) % total, 'manual'));

    root.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  navigate(((current - 1) + total) % total, 'manual');
      if (e.key === 'ArrowRight') navigate((current + 1) % total, 'manual');
    });

    let touchX = null, touchY = null;
    root.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; }, { passive: true });
    root.addEventListener('touchend', e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      const dy = e.changedTouches[0].clientY - touchY;
      touchX = touchY = null;
      if (Math.abs(dx) < SWIPE_THRESHOLD || (Math.abs(dy) > 0 && Math.abs(dx) / Math.abs(dy) < SWIPE_AXIS_LOCK)) return;
      navigate(dx < 0 ? (current + 1) % total : ((current - 1) + total) % total, 'manual');
    }, { passive: true });

    let mouseX = null, mouseY = null, dragging = false;
    root.addEventListener('mousedown', e => { if (e.button !== 0) return; mouseX = e.clientX; mouseY = e.clientY; dragging = true; root.style.cursor = 'grabbing'; });
    window.addEventListener('mouseup', e => {
      if (!dragging) return;
      dragging = false; root.style.cursor = '';
      if (mouseX === null) return;
      const dx = e.clientX - mouseX; const dy = e.clientY - mouseY;
      mouseX = mouseY = null;
      if (Math.abs(dx) < SWIPE_THRESHOLD || (Math.abs(dy) > 0 && Math.abs(dx) / Math.abs(dy) < SWIPE_AXIS_LOCK)) return;
      navigate(dx < 0 ? (current + 1) % total : ((current - 1) + total) % total, 'manual');
    });

    syncIndicators(0);
  }

  /* ==================== TABS ==================== */
  function initTabs(grid) {
    const buttons   = Array.from(grid.querySelectorAll('.agents-button-block'));
    const imgsBlock = grid.querySelector('.agents-imgs-block');
    if (!imgsBlock) return;
    const images = Array.from(imgsBlock.querySelectorAll('.agents-img'));
    if (!buttons.length || !images.length) return;

    const TAB_DURATION = 4000;
    let autoTimer = null;
    let current   = 0;
    let isVisible = false;

    function setHeight() {
      const active = images.find(img => img.classList.contains('is-active'));
      if (active && active.offsetHeight > 0) {
        imgsBlock.style.height = active.offsetHeight + 'px';
      } else {
        const anyImg = images.find(img => img.offsetHeight > 0);
        if (anyImg) imgsBlock.style.height = anyImg.offsetHeight + 'px';
      }
    }

    function activate(index, source) {
      const prevIndex = images.findIndex(img => img.classList.contains('is-active'));
      current = index;
      buttons.forEach((btn, i) => btn.classList.toggle('is-active', i === index));
      if (prevIndex !== -1 && prevIndex !== index) {
        images[prevIndex].classList.add('is-exit');
        setTimeout(() => images[prevIndex].classList.remove('is-active', 'is-exit'), 500);
      }
      images[index].classList.remove('is-exit');
      setTimeout(() => { images[index].classList.add('is-active'); setHeight(); }, 50);
      if (source === 'manual') resetAutoplay();
    }

    function startAutoplay() {
      stopAutoplay();
      autoTimer = setInterval(() => { if (isVisible) activate((current + 1) % buttons.length, 'auto'); }, TAB_DURATION);
    }
    function stopAutoplay() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }
    activate(0, 'auto');
    buttons.forEach((btn, i) => btn.addEventListener('click', () => activate(i, 'manual')));

    new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) startAutoplay(); else stopAutoplay();
    }, { threshold: 0.3 }).observe(grid);
  }

  /* ==================== LEADERS SLIDER ==================== */
  function initLeadersSlider(wrap) {
    const cards      = Array.from(wrap.querySelectorAll('.agents-leaders-card'));
    const scrollBlock = wrap.closest('.agents-leaders-scroll-block');
    const pagination = scrollBlock?.parentElement?.querySelector('.agents-leaders-pagination')
                    || document.querySelector('.agents-leaders-pagination');
    if (!cards.length) return;

    const total   = cards.length;
    let current   = 0;
    let autoTimer = null;
    let isVisible = false;
    let rafId     = null;

    function setOverflow() {
      if (scrollBlock) scrollBlock.style.overflow = window.innerWidth <= 767 ? 'hidden' : 'visible';
    }
    setOverflow();

    wrap.style.position = 'relative';
    wrap.style.overflow = 'visible';
    wrap.style.width    = '100%';

    cards.forEach(card => {
      card.style.position   = 'absolute';
      card.style.top        = '0';
      card.style.left       = '0';
      card.style.willChange = 'transform, opacity, filter';
      card.style.cursor     = 'pointer';
    });

    function update() {
      const wrapW   = wrap.offsetWidth;
      const cardW   = cards[0].offsetWidth;
      const cardH   = cards[0].offsetHeight;
      const centerX = (wrapW - cardW) / 2;
      const step    = cardW * 0.3;

      if (cardH) wrap.style.height = cardH + 'px';

      cards.forEach((card, i) => {
        let diff = i - current;
        if (diff > total / 2)  diff -= total;
        if (diff < -total / 2) diff += total;
        const absDiff = Math.abs(diff);
        const x = centerX + diff * step;

        let scale = 1, opacity = 1, brightness = 1, zIndex = 5;
        if      (absDiff === 0) { scale = 1;    opacity = 1;    brightness = 1;    zIndex = 10; }
        else if (absDiff === 1) { scale = 0.75; opacity = 0.8;  brightness = 0.4;  zIndex = 8;  }
        else if (absDiff === 2) { scale = 0.6;  opacity = 0.45; brightness = 0.2;  zIndex = 6;  }
        else                    { scale = 0.5;  opacity = 0;    brightness = 0.1;  zIndex = 1;  }

        card.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, filter 0.5s ease';
        card.style.transform  = `translateX(${x}px) scale(${scale})`;
        card.style.opacity    = opacity;
        card.style.filter     = `brightness(${brightness})`;
        card.style.zIndex     = zIndex;
      });

      if (pagination) {
        Array.from(pagination.querySelectorAll('.agents-leaders-dot')).forEach((dot, i) => {
          dot.classList.toggle('is-active', i === current);
        });
      }
    }

    if (pagination) {
      pagination.innerHTML = '';
      cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'agents-leaders-dot';
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        pagination.appendChild(dot);
        dot.addEventListener('click', () => navigate(i));
      });
    }

    function navigate(index) {
      current = ((index % total) + total) % total;
      update();
      resetAutoplay();
    }

    function startAutoplay() {
      stopAutoplay();
      autoTimer = setInterval(() => { if (isVisible) navigate(current + 1); }, 3000);
    }
    function stopAutoplay() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }

    new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) startAutoplay(); else stopAutoplay();
    }, { threshold: 0.3 }).observe(wrap);

    let touchX = null;
    wrap.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener('touchend', e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) < 48) return;
      navigate(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });

    let mouseX = null, dragging = false;
    wrap.addEventListener('mousedown', e => { mouseX = e.clientX; dragging = true; });
    window.addEventListener('mouseup', e => {
      if (!dragging) return;
      dragging = false;
      if (mouseX === null) return;
      const dx = e.clientX - mouseX;
      mouseX = null;
      if (Math.abs(dx) < 48) return;
      navigate(dx < 0 ? current + 1 : current - 1);
    });

    const resizeObserver = new ResizeObserver(() => update());
    resizeObserver.observe(wrap);

    setTimeout(update, 150);
  }

  /* ==================== MARQUEE ==================== */
  function initMarquee() {
    const style = document.createElement('style');
    style.textContent = `
      .agents-logos-developer-block, .agents-logos-block {
        display: flex !important; overflow: hidden !important;
        width: 100% !important; flex-wrap: nowrap !important;
        grid-template-columns: unset !important; grid-template-rows: unset !important;
      }
      .agents-logos-track {
        display: flex !important; align-items: center !important;
        gap: 24px !important; flex-shrink: 0 !important;
        min-width: max-content !important; grid-column: unset !important;
      }
      .agents-logos { overflow: hidden !important; }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.agents-logos-developer-block, .agents-logos-block').forEach(wrapper => {
      const tracks = Array.from(wrapper.querySelectorAll('.agents-logos-track'));
      if (!tracks.length) return;

      let pos = 0, raf = null, isVisible = false;

      function tick() {
        if (!isVisible) { raf = null; return; }
        pos -= 0.4;
        const w = tracks[0].scrollWidth;
        if (Math.abs(pos) >= w / 2) pos = 0;
        tracks.forEach(t => t.style.marginLeft = pos + 'px');
        raf = requestAnimationFrame(tick);
      }

      new IntersectionObserver(entries => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !raf) raf = requestAnimationFrame(tick);
      }, { threshold: 0.1 }).observe(wrapper);
    });
  }

  /* ==================== BOOT ==================== */
  function boot() {
    document.querySelectorAll('.agents-slider').forEach(initSlider);
    document.querySelectorAll('.agents-grid-tabs').forEach(initTabs);
    document.querySelectorAll('.agents-leaders-scroll').forEach(initLeadersSlider);
    initMarquee();

    const tabStyle = document.createElement('style');
    tabStyle.textContent = `
      .agents-imgs-block { position: relative; }
      .agents-img {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        transition: opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease;
        opacity: 0; filter: blur(12px); transform: scale(1.04); pointer-events: none;
      }
      .agents-img.is-active { opacity: 1; filter: blur(0px); transform: scale(1); pointer-events: all; z-index: 2; }
      .agents-img.is-exit   { opacity: 0; filter: blur(12px); transform: scale(0.97); z-index: 1; }
      .agents-button-block  { cursor: pointer; }
      .agents-button-block.is-active { color: #000 !important; }
      .agents-button-block.is-active .agents-hero-tag-icon-20 { color: #000 !important; }
      .agents-leaders-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 24px; }
      .agents-leaders-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(0,0,0,0.2); border: none; cursor: pointer; transition: all 0.3s ease; padding: 0; flex-shrink: 0; }
      .agents-leaders-dot.is-active { width: 12px; height: 12px; background: #000; }
    `;
    document.head.appendChild(tabStyle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
