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
        js.src = "//connect.facebook.net/en_US/sdk.js";
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

    $(window).on('load', function() {
        // Facebook Analytics
        fbSDK(document, 'script', 'facebook-jssdk');

        // Google Analytics
        googleAnalytics(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-88770786-1', 'auto');
        ga('send', 'pageview');
    });
})(jQuery);
