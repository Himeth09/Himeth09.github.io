$(function(){
    const pictures = [
        ["images/hime_hime.jpg", "Himeth Jayakody"],
        ["images/pineapple_fountain.jpg", "Pineapple Fountain @ Charleston, SC"],
        ["images/jojo.jpg", "NC State Fair 2019"],
        ["images/shivvy.jpg", "BabuQ with friends"],
        ["images/dorothea_dix.jpg", "Dorothea Dix Park, June 2021"]
    ];
    //preload images taken from Image Swap application from Murach Slides
    $('#image-list div').each(function(){
        let swappedImage = new Image();
        swappedImage.src = $(this).children().attr('src');
        //images.push(swappedImage.src);
        // console.log(swappedImage.src.toString());
    });
    
    let counter = 0;
    setInterval(function(){
        counter++;
        $('#main-image').attr('src', pictures[counter][0]);
        $('#caption').text(pictures[counter][1]);
        if(counter===4){
            counter=-1;
        }
    }, 6500);

    //set up event handlers for links taken from Image Swap application from Murach Slides
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