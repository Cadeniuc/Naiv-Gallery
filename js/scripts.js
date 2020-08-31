$(document).ready(function() {


	firstLoad();

	slidersSite();

	otherCode();

});

function firstLoad() {

	if($('.lazy').length) {
		var lazyLoadInstance = new LazyLoad({
			elements_selector: ".lazy",
			threshold: 0,
			cancel_on_exit: true,
		});
		lazyLoadInstance.loadAll();
	}
}

function otherCode() {

	// Menu burger mobile
	$(".menu-icon").on("click", function(e) {
		$('.menu-icon').toggleClass('opened');
		if ($('.menu-icon').hasClass('opened')) {
			$('.menu_header_go').addClass('active');
		}else {
			$('.menu_header_go').removeClass('active');
		}
	});

	$('a[href="#"]').on("click", function (e) {
		e.preventDefault();
	});

	$('.read_more_butt').on("click", function (e) {
		e.preventDefault();
		$('.in_to_info_blk .in_to_right_texts_go').addClass('visible');
		$('.show_more_slid_home').slideUp();
	});

	$('[data-show-search]').on("click", function (e) {
		e.preventDefault();
		$('.this_is_search').toggleClass('active');
		$(this).toggleClass('active');
	});

}

function slidersSite() {

	if($('#slider_texts_home').length) {
		var slider_texts_home = new Swiper("#slider_texts_home", {
			slidesPerView: 1,
			loop: true,
			observer: true,
			autoHeight: true,
			parallax: true,
			observeParents: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: ".text_next_slider",
				prevEl: ".text_prev_slider"
			}
		});
	}

	if($('#slider_bg_home').length) {
		var slider_bg_home = new Swiper("#slider_bg_home", {
			slidesPerView: 1,
			loop: true,
			observer: true,
			autoHeight: true,
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 2,
			},
			pagination: {
				el: '#pagination_home_dots',
				type: 'bullets',
				clickable: true
			},
			 breakpoints: {
			 	320: {
			 		// speed: 800,
			 	},
			 	640: {
			 		speed: 800,
			 	}
			 }
		});
	}
}