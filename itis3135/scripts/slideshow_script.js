$(function(){
    //preload images
    // $('#image-list div').each(function(){
    //     let swappedImage = new Image();
    //     swappedImage.src = $(this).children().attr('src');
    // });

    //set up event handlers for links
    $('#image-list div').click(function(evt){
        //swap image
        let imageURL = $(this).children().attr('src');
        //$('#main-image').fadeOut('slow');
        $('#main-image').attr('src', imageURL);
        //$('#main-image').fadeIn('slow');

        //swap caption
        let imageCaption = $(this).children().attr('alt');
        $('#caption').text(imageCaption);

        //cancle default action
        evt.preventDefault();
    });
});