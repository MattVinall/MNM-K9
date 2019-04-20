$(function() {
	// w0w js
	new WOW().init({
		mobile: false,
		offset: 50
	});
	// flickity carousel
	$('.carousel').flickity({
		wrapAround: true
	});
});
