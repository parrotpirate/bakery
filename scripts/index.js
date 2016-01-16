jQuery(document).ready(function($) {

	/*Image 1:1 aspect ratio resize*/
	function imgAR() {
		 var ar = $('#recipes .recipe_card .recipe_selector .selector_window .selector_img img').width();
		$('#recipes .recipe_card .recipe_selector .selector_window .selector_img img').css({'height':ar+'px'});  
	}

	function leftSelector() {
		$('.selector_img:first-child').appendTo('.selector_window');
	}

	function rightSelector() {
		$('.selector_img:last-child').prependTo('.selector_window');
	}

	/*Image resize on page load*/
	imgAR();
	/*Image resize on page resize*/
	$(window).resize(imgAR);

	$('.left.selector').click(leftSelector);
	$('.right.selector').click(rightSelector);


});