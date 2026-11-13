
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      478: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 6,
        spaceBetween: 8
      }
    }
  });
