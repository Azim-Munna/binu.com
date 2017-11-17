(function($) {
    "use strict";

    // jquery document ready function
    jQuery(document).on('ready', function() {
        
        var searchbtn = $('.searchbtn a.fa');
        searchbtn.on('click', function(){
            $(this).toggleClass('fa-close');
            var close = $('fa-close');
            if(close){
                $('.searbox').toggleClass('active');
                $(this).toggleClass('fa-search');
               }

        });
    });


})(jQuery);
