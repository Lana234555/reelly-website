// Small usability fixes layered on top of the Webflow markup.

function closeDropdowns() {
  const $ = (window as unknown as { jQuery?: (el: Element) => { triggerHandler: (e: string) => void } }).jQuery;
  document.querySelectorAll(".w-dropdown").forEach((dd) => {
    const toggle = dd.querySelector(".w-dropdown-toggle");
    if (!toggle?.classList.contains("w--open")) return;
    if ($) $(dd).triggerHandler("w-close");
    dd.querySelectorAll(".w--open").forEach((el) => el.classList.remove("w--open"));
    toggle.setAttribute("aria-expanded", "false");
  });
}

function closeMobileNav() {
  const btn = document.querySelector<HTMLElement>(".w-nav-button.w--open");
  if (btn) btn.click();
}

export function installUxEnhancements() {
  const w = window as unknown as { __uxEnhanced?: boolean };
  if (w.__uxEnhanced) return;
  w.__uxEnhanced = true;

  // Close navbar dropdowns / the mobile menu as soon as a link inside them is clicked,
  // and close open dropdowns when clicking anywhere else on the page.
  document.addEventListener("click", (e) => {
    const target = e.target as Element;
    const link = target.closest("a");
    if (link && link.closest(".w-dropdown-list, .w-nav-menu")) {
      closeDropdowns();
      closeMobileNav();
      return;
    }
    if (!target.closest(".w-dropdown")) closeDropdowns();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdowns();
  });

  // Safety net: never let a page loader overlay stay on screen.
  const hideLoaders = () =>
    document.querySelectorAll<HTMLElement>(".page-loader").forEach((el) => {
      if (getComputedStyle(el).display === "none") return;
      el.style.transition = "opacity .6s ease";
      el.style.opacity = "0";
      setTimeout(() => (el.style.display = "none"), 650);
    });
  setTimeout(hideLoaders, 3500);
}
