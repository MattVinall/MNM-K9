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
	// Smooth Scroll
	$('a').smoothScroll({
		offset: 50,
		speed: 1200
	});

	// Hamburger Menu
	$('.hamburger').on('click', function() {
		$('.navigationContainer').fadeIn(300);
	});
	$('.exitResponsive').on('click', function() {
		$('.navigationContainer').fadeOut(300);
	});
	$('a').on('click', function() {
		$('.navigationContainer').fadeOut(300);
	});
});
