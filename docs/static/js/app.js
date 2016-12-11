'use strcit';
(function ($) {
    function fadePreloader() {
        $('.page-wrapper').removeClass('is-loading');

        setTimeout(function() {
            $('.page-preloader').css('z-index', '-1');
            $('.preloader-wrapper').removeClass('active');
        }, 500);
    };

    $(window).on('load', function() {
        $(".button-collapse").sideNav({
            menuWidth: 240,
            edge: 'left',
            closeOnClick: true,
            draggable: true,
        });

        fadePreloader();
    });
})(jQuery);
