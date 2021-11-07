$(document).ready(function() {
    $('#header').load('components/header.html');
    $('#navigation').load('components/nav.html');
    $('#footer').load('components/footer.html');
    //preloading for gallery page
    $(function(){
        //preload images taken from Image Swap application from Murach Slides
        $('.column').each(function(){
            let swappedImage = new Image();
            swappedImage.src = $(this).children().attr('src');
        });
    })
});