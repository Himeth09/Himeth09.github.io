//array called pictures for the automatic image cycling function
const pictures = [
    {"source":"images/radio_towers.jpg", "caption":"Radio Towers"},
    {"source":"images/snake.jpg", "caption":"Snake"},
    {"source":"images/puffin.jpg", "caption":"Puffin"},
    {"source":"images/flower.jpg", "caption":"Flower"}
];

let index = 1; 

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
         * the normal .indexOf was not working, so I followed this solution below:
         * https://stackoverflow.com/questions/8313350/javascript-indexof-on-an-array-of-objects
         * */
        index = pictures.findIndex((item) => item.source === $('#main-image').attr('src'));

        evt.preventDefault();
    });
});

$(function(){
    for (let i = 0; i < pictures.length; i++) {
        let tempImage = new Image();
        tempImage.src = pictures[i].source;
    }
});

$(function(){   
    
    //automatically cylce through the different images
    setInterval(function(){

        //if the index is equal to 7, it needs to be changed as there is no 7th index in the pictures array
        if(index===4){

            //sets index to 0 to so that it starts at the first image
            index=0;
        }
        
        //change main image to the next image in the array
        $('#main-image').attr('src', pictures[index].source); 

        //change caption to the next caption in the array
        $('#caption').text(pictures[index].caption);

        //increments index to go to the next image
        index++;
    }, 6000); //Uses an interval so that each image stays for 6s
   
})