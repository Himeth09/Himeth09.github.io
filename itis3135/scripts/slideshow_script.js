//array called pictures for the automatic image cycling function
const pictures = [
    {"source":"images/hime_hime.jpg", "caption":"Himeth Jayakody"},
    {"source":"images/pineapple_fountain.jpg", "caption":"Pineapple Fountain @ Charleston, SC"},
    {"source":"images/jojo.jpg", "caption":"NC State Fair 2019"},
    {"source":"images/shivvy.jpg", "caption":"BabuQ with friends"},
    {"source":"images/dorothea_dix.jpg", "caption":"Dorothea Dix Park, June 2021"}
];

//counter set at 1 since the first image is already displayed and we don't want the auto cycling to count it twice
let counter = 1; 

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

        /**
         * needed a way to get the index of whatever image was clicked so the automatic cycling would be at the right index
         * https://stackoverflow.com/questions/8313350/javascript-indexof-on-an-array-of-objects
         * */
        counter = pictures.findIndex((item) => item.source === $('#main-image').attr('src'));

        evt.preventDefault();
    });
});

$(function(){   
    
    //automatically cylce through the different images
    setInterval(function(){ 
        if(counter===5){

            //sets counter to 0 to so that it starts at the first image
            counter=0;
        }

        //change main image to the next image in the array
        $('#main-image').attr('src', pictures[counter].source); 

        //change caption to the next caption in the array
        $('#caption').text(pictures[counter].caption);

        counter++;
    }, 6500); //Uses an interval so that each image stays for 6.5s
})