$(document).ready(function(){
    //preload images
    $('#image-list a').each(function(){
        let swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    //set up event handlers for links
    $('#image-list a').click(function(evt){
        //swap image
        let imageURL = $(this).attr('href');
        $('#main-image').attr('src', imageURL);

        //swap caption
        let imageCaption = $(this).attr('title');
        $('#caption').text(imageCaption);

        //cancle default action
        evt.preventDefault();
    });

    $('li:first-child a').focus();
});

