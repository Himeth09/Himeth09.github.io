$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 1000,
        adaptiveHeight: true,
        slideMargin: 20,
        speed: 3000,
        pager: true,
        pagerType: 'full'
    });
});