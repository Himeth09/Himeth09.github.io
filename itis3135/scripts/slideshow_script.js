const pictures = [
    ["images/hime_hime.jpg", "Himeth Jayakody"],
    ["images/pineapple_fountain.jpg", "Pineapple Fountain @ Charleston, SC"],
    ["images/jojo.jpg", "NC State Fair 2019"],
    ["images/shivvy.jpg", "BabuQ with friends"],
    ["images/dorothea_dix.jpg", "Dorothea Dix Park, June 2021"]
]; //array of pictures for the automatic image cycling function

$(function(){
    //preload images taken from Image Swap application from Murach Slides
    $('#image-list div').each(function(){
        let swappedImage = new Image();
        swappedImage.src = $(this).children().attr('src');
    });

    //set up event handlers for links taken from Image Swap application from Murach Slides
    $('#image-list div').click(function(evt){

        //swap image
        let imageURL = $(this).children().attr('src');
        $('#main-image').attr('src', imageURL);

        //swap caption
        let imageCaption = $(this).children().attr('alt');
        $('#caption').text(imageCaption);

        //cancle default action
        evt.preventDefault();
    });
});

$(function(){   
    //automatically cylce through the different images
    let counter = 0; //counter set at 0 since the first image is already displayed
    setInterval(function(){ //Uses set interval so that each image stays for 6.5s
        counter++;
        $('#main-image').attr('src', pictures[counter][0]); //change main image to the next image in the array
        $('#caption').text(pictures[counter][1]); //change caption to the next caption in the array
        if(counter===4){
            counter=-1; //sets counter to -1 to so that it starts at the first image
        }
    }, 6500);
})