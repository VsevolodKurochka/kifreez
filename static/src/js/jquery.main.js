jQuery(document).ready(function($){

	$.fn.hasAttr = function(name) {  
	 return this.attr(name) !== undefined;
};

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	// Tabs
		$('[data-action="tab"]').click(function(){			
			// Tab links toggle class
				$(this).closest(".tabs__list").children("li").removeClass('active');
				$(this).parent().addClass('active');
			// Show tab content
				var tabTarget = $(this).attr('data-target');
				$(tabTarget).fadeIn(0);
				$(".tabs__content > div").not($(tabTarget)).fadeOut(0);
		});
	
	var $navigationLinks = $('#js-navigation-menu li > a');
	// cache (in reversed order) the sections
	var $sections = $($("section").get().reverse());

	// map each section id to their corresponding navigation link
	var sectionIdTonavigationLink = {};
	$sections.each(function() {
		var id = $(this).attr('id');
		sectionIdTonavigationLink[id] = $('#js-navigation-menu li > a[href=\\#' + id + ']');
	});

	// throttle function, enforces a minimum time interval
	function throttle(fn, interval) {
		var lastCall, timeoutId;
		return function () {
			var now = new Date().getTime();
			if (lastCall && now < (lastCall + interval) ) {
					// if we are inside the interval we wait
					clearTimeout(timeoutId);
					timeoutId = setTimeout(function () {
							lastCall = now;
							fn.call();
					}, interval - (now - lastCall) );
			} else {
					// otherwise, we directly call the function 
					lastCall = now;
					fn.call();
			}
		};
	}

	function highlightNavigation() {
		// get the current vertical position of the scroll bar
		var scrollPosition = $(window).scrollTop();

		// iterate the sections
		$sections.each(function() {
				var currentSection = $(this);
				// get the position of the section
				var sectionTop = currentSection.offset().top;

				// if the user has scrolled over the top of the section  
				if (scrollPosition >= sectionTop - 200) {
					// get the section id
					var id = currentSection.attr('id');
					// get the corresponding navigation link
					var $navigationLink = sectionIdTonavigationLink[id];
					// if the link is not active
					if (!$navigationLink.hasClass('active')) {
							// remove .active class from all the links
							$navigationLinks.removeClass('active');
							// add .active class to the current link
							$navigationLink.addClass('active');
					}
					// we have found our section, so we return false to exit the each loop
					return false;
				}
		});
	}

	$(window).scroll( throttle(highlightNavigation,100) );

	if($(window).width() > 1025){
		$('.parallax-image img').parally({
			speed: 0.2,
			mode: 'transform'
		});
	}

	// $(window).scroll(function(){
	// 	// Add parallax scrolling to all images in .paralax-image container
	// 	$('.parallax-image').each(function(){
	// 		var section = $(this).closest('section');
	// 		var speed = $(this).hasAttr('data-speed') ? $(this).attr('data-speed') : 5;
	// 		//console.log(typeof speed);
	// 		// only put top value if the window scroll has gone beyond the top of the image
	// 		if ( ($(this).offset().top < $(window).scrollTop()) && (section.offset().top + section.outerHeight() - 200 ) > $(window).scrollTop() ) {
	// 			// Get ammount of pixels the image is above the top of the window
	// 			var difference = $(window).scrollTop() - $(this).offset().top;
	// 			// Top value of image is set to half the amount scrolled
	// 			// (this gives the illusion of the image scrolling slower than the rest of the page)
	// 			var half = (difference / speed) + 'px';

	// 			$(this).find('img').css('top', "-" + half);
	// 		} else {
	// 			// if image is below the top of the window set top to 0
	// 			//$(this).find('img').css('top', '0');
	// 		}
	// 	});

	// });

	$('#team-carousel').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		navContainerClass: 'home-team__carousel-nav',
		autoHeight: true,
		navClass: [
			"home-team__carousel-btn home-team__carousel-btn_prev btn btn_general effect effect_bounce-bottom", 
			"home-team__carousel-btn home-team__carousel-btn_next btn btn_general effect effect_bounce-bottom"
		],
		responsive: {
			768: {
				items: 2,
				autoHeight: false
			},
			1025: {
				items: 3
			}
		}
	});

});	