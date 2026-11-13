
//Animation 2
  // Wrap every letter in a span
var textWrapper = document.querySelector('.animation2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animation2 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1800,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.animation2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  