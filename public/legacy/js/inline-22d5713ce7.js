
window.addEventListener("load", function () {
  const btn = document.querySelector(".agents-phone-add-button:not(.blue)");
  if (!btn) return;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes floatUpDown {
      0%   { transform: translateY(0px); }
      50%  { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .is-floating {
      animation: floatUpDown 2s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            btn.classList.add("is-floating");
          }, 3000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(btn);
});
