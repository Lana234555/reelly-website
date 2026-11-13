
(function() {
  const animatedElements = new Set();
  const DURATION = 5000;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateNumber(element) {
    if (animatedElements.has(element)) return;
    const text = element.textContent.trim();
    const targetNumber = parseInt(text.replace(/[^\d]/g, ''));
    if (isNaN(targetNumber) || targetNumber === 0) return;
    animatedElements.add(element);

    element.textContent = '0';
    const startTime = Date.now();
    let lastRenderedValue = 0;

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const current = Math.floor(targetNumber * easeOutCubic(progress));
      if (current !== lastRenderedValue) {
        element.textContent = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        lastRenderedValue = current;
      }
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = text;
      }
    }
    requestAnimationFrame(animate);
  }

  function init() {
    document.querySelectorAll('.agent-grid-number-block').forEach(el => {
      const hasWebflowAnim = el.getAttribute('data-w-id') !== null;

      if (hasWebflowAnim) {
        // Десктоп — polling opacity (Webflow анімація)
        const interval = setInterval(() => {
          const opacity = parseFloat(window.getComputedStyle(el).opacity);
          const numberEl = el.querySelector('.fs-numbercount_number');
          if (opacity >= 0.9 && numberEl && !animatedElements.has(numberEl)) {
            animateNumber(numberEl);
            clearInterval(interval);
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 30000);

      } else {
        // Мобілка — IntersectionObserver (без Webflow анімації)
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const numberEl = entry.target.querySelector('.fs-numbercount_number');
              if (numberEl) animateNumber(numberEl);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });

        observer.observe(el);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(init, 500));
})();
