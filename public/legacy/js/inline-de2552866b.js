


// when document is fully loaded
$( document ).ready(function() {


$('.list').slick({
  dots: false,
  speed: 500,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  touchThreshold:300,
  responsive: [
      {
      // desktop
      breakpoint: 1919,
      settings: {
        slidesToShow: 3
      }
    },
    {
      // tablet
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
       {
      // mobile portrait
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      // mobile 
      breakpoint: 478,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.slider-prev').click(function(){
    $(this).closest('.section').find(".list").slick('slickPrev');
});

$('.slider-next').click(function(){
    $(this).closest('.section').find(".list").slick('slickNext');
});


});


