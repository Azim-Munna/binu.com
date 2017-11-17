jQuery(document).ready(function(){

	jQuery(window).scroll(function(){

		var x = jQuery(window).scrollTop();
		var headerHeight = jQuery(".header-area").outerHeight();

	if( x > headerHeight){
		jQuery(".header-bottom").addClass("fixed", function(){
			"easeInElastic"
		});
	}
	else{
		jQuery(".header-bottom").removeClass("fixed");
	}

	});

});