jQuery(document).ready(function($) {

	/*Image 1:1 aspect ratio resize*/
	function imgAR() {
		 var ar = $('#recipes .recipe_card .recipe_selector .selector_window .selector_img img').width();
		$('#recipes .recipe_card .recipe_selector .selector_window .selector_img img').css({'height':ar+'px'});  
	}

	

	/*Image resize on page load*/
	imgAR();
	/*Image resize on page resize*/
	$(window).resize(function () {
		 setTimeout(imgAR, 300);
	});

	/*Slick scrolling carousel*/
	$('.selector_window').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.right.selector'),
		nextArrow: $('.left.selector'),
		draggable: false,
		swipe: false,
		touchMove: false
	});

	$('.selector_img').click(function(e) {
		e.preventDefault();
	});


});