

function slider1() {

let splides = $('.slider1');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 3,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '20px', // space between slides
  arrows: false, // 'slider' or false
  pagination: false, // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind : true, // go back to beginning when reach end
  rewindSpeed : 400,
  waitForTransition : false,
  updateOnMove : true,
  trimSpace: true, // true removes empty space from end of list
  breakpoints: {
		991: {
    	// Tablet
  arrows: false, // 'slider' or false
		},
    767: {
    	// Mobile Landscape
  arrows: false, // 'slider' or false
		},
    479: {
    	// Mobile Portrait
  arrows: false, // 'slider' or false
		}
	}
} ).mount();
}

}
slider1();

new Splide( '.splide', {
  classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
} );

