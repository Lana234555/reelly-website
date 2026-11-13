
window.addEventListener("load", function () {
  const slider = document.querySelector("#blog-slider");
  const wrapper = slider ? slider.querySelector(".w-dyn-items") : null;
  const buttons = document.querySelectorAll(".agents-blog-slider-butoon");

  if (!wrapper || buttons.length === 0) return;

  // Спочатку видаляємо поточну статтю
  const currentSlug = window.location.pathname;
  slider.querySelectorAll(".w-dyn-item").forEach(function(item) {
    const link = item.querySelector("a");
    if (link && link.getAttribute("href") === currentSlug) {
      item.remove();
    }
  });

  // Після видалення беремо items
  const items = slider.querySelectorAll(".w-dyn-item");
  const totalItems = items.length;
  const gap = 24;
  let currentIndex = 0;

  const prevBtn = buttons[0];
  const nextBtn = buttons[1];

  function getVisible() {
    if (window.innerWidth <= 479) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  }

  function setItemWidths() {
    const visible = getVisible();
    const sliderWidth = slider.offsetWidth;
    const itemWidth = (sliderWidth - gap * (visible - 1)) / visible;
    items.forEach(item => {
      item.style.width = itemWidth + "px";
      item.style.minWidth = itemWidth + "px";
    });
  }

  function getMaxIndex() {
    return Math.max(0, totalItems - getVisible());
  }

  function goTo(index) {
    const maxIndex = getMaxIndex();
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    const visible = getVisible();
    const sliderWidth = slider.offsetWidth;
    const itemWidth = (sliderWidth - gap * (visible - 1)) / visible;
    const moveX = -(currentIndex * (itemWidth + gap));
    wrapper.style.transform = "translateX(" + moveX + "px)";
    updateButtons();
  }

  function updateButtons() {
    const maxIndex = getMaxIndex();
    if (currentIndex === 0) {
      prevBtn.classList.remove("active");
      nextBtn.classList.add("active");
    } else if (currentIndex >= maxIndex) {
      prevBtn.classList.add("active");
      nextBtn.classList.remove("active");
    } else {
      prevBtn.classList.add("active");
      nextBtn.classList.add("active");
    }
  }

  prevBtn.addEventListener("click", function () { goTo(currentIndex - 1); });
  nextBtn.addEventListener("click", function () { goTo(currentIndex + 1); });

  // Свайп пальцем
  let touchStartX = 0;
  let touchStartY = 0;
  let isDragging = false;
  let isHorizontal = null;

  slider.addEventListener("touchstart", function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging = true;
    isHorizontal = null;
  }, { passive: true });

  slider.addEventListener("touchmove", function(e) {
    if (!isDragging) return;
    const diffX = Math.abs(e.touches[0].clientX - touchStartX);
    const diffY = Math.abs(e.touches[0].clientY - touchStartY);
    if (isHorizontal === null) {
      isHorizontal = diffX > diffY;
    }
    if (isHorizontal) {
      e.preventDefault();
    }
  }, { passive: false });

  slider.addEventListener("touchend", function(e) {
    if (!isDragging) return;
    isDragging = false;
    if (!isHorizontal) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    const next = diff > 0 ? currentIndex + 1 : currentIndex - 1;
    goTo(next);
  }, { passive: true });

  slider.addEventListener("touchcancel", function() {
    isDragging = false;
    isHorizontal = null;
  }, { passive: true });

  window.addEventListener("resize", function () {
    setItemWidths();
    goTo(0);
  });

  // Невелика затримка щоб DOM точно оновився після remove()
  setTimeout(function() {
    setItemWidths();
    goTo(0);
  }, 50);
});
