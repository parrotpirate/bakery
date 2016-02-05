jQuery(document).ready(function($) {
/*Stand alone functions and variables*/

	/*Image 1:1 aspect ratio resize*/
	function imgAR() {
		 var ar = $('#recipes .recipe_card .recipe_selector .selector_window .selector_img img').width();
		$('#recipes .recipe_card .recipe_selector .selector_window .selector_img img').css({'height':ar+'px'});  
	}

	/*Object constructor for recipe card items*/
	function recipe(image, title, subtext, summary, rating) {
		this.image = image;
		this.title = title;
		this.subtext = subtext;
		this.summary = summary;
		this.rating = rating;
	}

	var mintCake = new recipe(
		'resources/images/mint_cake.jpg', 
		'Marvelous mint cake', 
		'refreshing desert', 
		'Takes the concept of an after dinner mint to a whole new level.',
		'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>'
		);

	var pancakes = new recipe (
		'resources/images/pancakes.jpg',
		'Perfect pancakes',
		'season favorite',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
		'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'
		);

	var meatPlate = new recipe(
		'resources/images/meat_plate.JPG',
		'Challenging charcuterie',
		'we have the meat!',
		'Big plate of various types of desceased animal bits.',
		'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>'
		);

	var fruitPie = new recipe(
		'resources/images/fruit_pie.jpg',
		'Fabulous fruit pie',
		'tart and tangy',
		'A fruit smoothie in pie form.',
		'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>'
		);

	/*Function to switch between recipe card items*/
	function recipeClick(objectName){
		$('.recipe_image img').fadeOut('400', function() {
			$(this).attr('src', objectName.image).fadeIn('400');
		});
		$('.recipe_title h3').fadeOut('400', function() {
			$(this).text(objectName.title).fadeIn('400');
		});
		$('.recipe_title p').fadeOut('400', function() {
			$(this).text(objectName.subtext).fadeIn('400');
		});
		$('.recipe_summary p').fadeOut('400', function() {
			$(this).text(objectName.summary).fadeIn('400');
		});
		$('.recipe_rating').fadeOut('400', function() {
			$(this).html(objectName.rating).fadeIn('400');
		});
	}

	
/*Page functions*/

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
		prevArrow: $('.left.selector'),
		nextArrow: $('.right.selector'),
		draggable: false,
		swipe: false,
		touchMove: false
	});

	/*Switch recipe cardd to selected item*/
	$('.selector_img img').click(function(event) {
		var x = ($(this).attr('class'));
		switch (x) {
			case "mint_cake":
				recipeClick(mintCake);
				break;
			case "pancakes":
				recipeClick(pancakes);
				break;
			case 'meat_plate':
				recipeClick(meatPlate);
				break;
			case 'fruit_pie':
				recipeClick(fruitPie);
				break;
			default:
				alert('try again');
				break;
		}
	});


});