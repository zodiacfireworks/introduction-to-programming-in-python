'use strcit';
(function ($) {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1183655891721937',
            status     : true,
            xfbml      : true,
            version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
    };

    function fbSDK(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    };

    function googleAnalytics(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    };

    function fadePreloader() {
        $('.page-wrapper').removeClass('is-loading');

        setTimeout(function() {
            $('.page-preloader').css('z-index', '-1');
            $('.preloader-wrapper').removeClass('active');
        }, 500);
    };

    $(window).on('load', function() {
        // Facebook Analytics
        // fbSDK(document, 'script', 'facebook-jssdk');

        // Google Analytics
        // googleAnalytics(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        // ga('create', 'UA-88770786-1', 'auto');
        // ga('send', 'pageview');

        // Side navigation
        $('#slide-out-trigger').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        // Slide Show
        $("#slide-show").owlCarousel({
            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            pagination : false,
            paginationSpeed : 400,
            singleItem:true
        });

        // Scroll bars
        $('.scrollbar-macosx').scrollbar();

        // Fade preloader
        fadePreloader();
    });
})(jQuery);
