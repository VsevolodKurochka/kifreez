$(document).ready(function(){

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

	$("#home-last-reviews").owlCarousel({
		loop: true,
		margin: 15,
		nav: false,
		items: 1,
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		autoHeight: true,
		responsive: {
			768: {
				items: 2,
				autoHeight: false,
				dots: true,
			}
		}
	});

	if($(window).width() < 768){
		$('.home-reviews__content').addClass('owl-carousel');
		$('.home-reviews__content').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			items: 1,
			dots: true,
			autoplay: false,
			autoplayTimeout: 3000,
			autoHeight: true
		});
	}

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
	

});	