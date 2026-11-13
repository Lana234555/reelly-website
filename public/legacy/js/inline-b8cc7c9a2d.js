
// init Weglot
Weglot.initialize({
	api_key: 'wg_dc5ec0f03becd1c57cb65d2e36c93e457'
});

// on Weglot init
Weglot.on('initialized', ()=>{
	// get the current active language
  const currentLang = Weglot.getCurrentLang();
  // if the current active language link exists
  if(document.querySelector('.wg-element-wrapper.sw3 [lang='+currentLang+']')){
  	// click the link
  	document.querySelector('.wg-element-wrapper.sw3 [lang='+currentLang+']').click();
  }
});

// for each of the .wg-element-wrapper language links
document.querySelectorAll('.wg-element-wrapper.sw3 [lang]').forEach((link)=>{
	// add a click event listener
	link.addEventListener('click', function(e){
  	// prevent default
		e.preventDefault();
    // switch current active language after a setTimeout
    setTimeout(()=>Weglot.switchTo(this.getAttribute('lang')),700);
	});
});
