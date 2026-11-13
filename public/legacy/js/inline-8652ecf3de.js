
(function () {
  const SVG_URL         = 'https://cdn.jsdelivr.net/gh/Lana234555/assets@242ae03/Frame%201618868865.svg';
  const GATHER_DURATION = 2300;

  // Визначаємо потужність пристрою
  const isMobile  = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const isLowEnd  = isMobile || navigator.hardwareConcurrency <= 4;

  const SCATTER_COUNT = isLowEnd ? 200 : 500;
  const ACTIVE_COUNT  = isLowEnd ? 150 : 500;
  const BATCH_SIZE    = isLowEnd ? 30  : 80;

  const container = document.getElementById('planet-svg-container');
  if (!container) return;

  container.style.cssText = `
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: visible;
  `;

  fetch(SVG_URL)
    .then(r => r.text())
    .then(svgText => {
      container.innerHTML = svgText;
      const svg = container.querySelector('svg');
      if (!svg) return;

      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      svg.style.cssText = 'display:block;position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;';

      const gradRects = Array.from(svg.querySelectorAll('rect'));
      gradRects.forEach(r => {
        r.style.opacity    = '0';
        r.style.transition = 'opacity 1s ease';
      });

      const dots = Array.from(svg.querySelectorAll('path[fill="white"]'));
      if (!dots.length) return;

      const vw = 2250;
      const vh = 966;

      const shuffledAll = dots.slice().sort(() => Math.random() - 0.5);
      const scatterDots = shuffledAll.slice(0, SCATTER_COUNT);
      const staticDots  = shuffledAll.slice(SCATTER_COUNT);

      staticDots.forEach(d => {
        d.style.opacity    = '0.20';
        d.style.transition = 'none';
      });

      const svgStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      // На слабких — простіші keyframes без важких переходів
      svgStyle.textContent = isLowEnd ? `
        @keyframes tw-a { 0%,100%{opacity:0.20} 90%{opacity:0.90} }
        @keyframes tw-b { 0%,100%{opacity:0.20} 90%{opacity:0.75} }
        @keyframes tw-c { 0%,100%{opacity:0.20} 90%{opacity:0.60} }
        @keyframes glow {
          0%,100% { opacity: 0.7; }
          50%     { opacity: 1.0; }
        }
      ` : `
        @keyframes tw-a { 0%,100%{opacity:0.20} 90%{opacity:1.00} }
        @keyframes tw-b { 0%,100%{opacity:0.20} 90%{opacity:0.85} }
        @keyframes tw-c { 0%,100%{opacity:0.20} 90%{opacity:0.70} }
        @keyframes glow {
          0%,100% { opacity: 0.7; transform: scale(1); }
          50%     { opacity: 1.0; transform: scale(1.06); }
        }
      `;
      svg.insertBefore(svgStyle, svg.firstChild);

      function waitForLayout(cb) {
        const check = () => {
          const r = svg.getBoundingClientRect();
          if (r.width > 0) cb(r);
          else requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
      }

      waitForLayout(svgRect => {
        const scale       = svgRect.width / vw;
        const screenW_svg = window.innerWidth  / scale;
        const screenH_svg = window.innerHeight / scale;
        const svgOffsetX  = svgRect.left / scale;
        const svgOffsetY  = svgRect.top  / scale;

        // ── Розсіювання ──
        scatterDots.forEach(dot => {
          const targetX = -svgOffsetX + Math.random() * screenW_svg;
          const targetY = -svgOffsetY + Math.random() * screenH_svg;
          const rx = targetX - vw / 2;
          const ry = targetY - vh / 2;
          dot.style.transition = 'none';
          dot.style.transform  = `translate(${rx}px, ${ry}px)`;
          dot.style.opacity    = '0';
        });

        scatterDots[0].getBoundingClientRect();

        // ── Поява ──
        scatterDots.forEach(dot => {
          const delay = (Math.random() * 0.4).toFixed(2);
          dot.style.transition = `opacity 0.4s ${delay}s ease`;
          dot.style.opacity    = '1';
        });

        // ── Збір ──
        setTimeout(() => {
          const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';
          scatterDots.forEach(dot => {
            const wave  = Math.random() * 300;
            const total = GATHER_DURATION - wave;
            dot.style.transition = `transform ${total}ms ${wave}ms ${easing}, opacity ${total}ms ${wave}ms ease`;
            dot.style.transform  = 'translate(0, 0)';
            dot.style.opacity    = '0.20';
          });

          // ── Мерехтіння + сяяння ──
          setTimeout(() => {
            scatterDots.forEach(d => {
              d.style.transition = 'none';
              d.style.opacity    = '0.20';
            });

            const allDots    = [...scatterDots, ...staticDots];
            const forTwinkle = allDots.slice().sort(() => Math.random() - 0.5).slice(0, ACTIVE_COUNT);
            const anims      = ['tw-a','tw-b','tw-c'];

            // Мерехтіння батчами
            let i = 0;
            function applyTwinkle() {
              const end = Math.min(i + BATCH_SIZE, forTwinkle.length);
              for (; i < end; i++) {
                const dot   = forTwinkle[i];
                const anim  = anims[Math.floor(Math.random() * 3)];
                const dur   = (3 + Math.random() * 5).toFixed(2);
                const delay = -(Math.random() * 10).toFixed(2);
                dot.style.transition = 'none';
                dot.style.animation  = `${anim} ${dur}s ${delay}s ease-in-out infinite`;
              }
              if (i < forTwinkle.length) requestAnimationFrame(applyTwinkle);
            }
            requestAnimationFrame(applyTwinkle);

            // Сяяння градієнту — на слабких без scale
            gradRects.forEach((r, i) => {
              r.style.opacity         = '1';
              r.style.transformOrigin = 'center center';
              r.style.animation       = `glow ${(4 + i * 1.5).toFixed(1)}s ${(i * 0.5).toFixed(1)}s ease-in-out infinite`;
            });

          }, GATHER_DURATION + 300);
        }, 700);
      });

      // Пауза коли не видно
      new IntersectionObserver(entries => {
        const state = entries[0].isIntersecting ? 'running' : 'paused';
        dots.forEach(d => {
          if (d.style.animation) d.style.animationPlayState = state;
        });
        gradRects.forEach(r => {
          if (r.style.animation) r.style.animationPlayState = state;
        });
      }, { threshold: 0.1 }).observe(container);
    })
    .catch(e => console.error('Planet SVG error:', e));
})();
