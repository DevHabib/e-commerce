(function ($) {
	"use strict";

	// Jquery clickable functions starts
	jQuery(document).ready(function ($) {
		new WOW().init();

		// tooltip starts
		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
			
		})
		// tooltip ends
		$('.fw-dropdown').on('click', () => ($('.fw-dropdown-toggle').toggleClass('active')));
	});

	//Jquery clickable functions ends

	// jQuery loading function starts          
	jQuery(window).load(function () {
	
	});
	// jQuery loading function ends
}(jQuery));

