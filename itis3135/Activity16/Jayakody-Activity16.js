$(document).ready(function(){
    let flickrURL = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
    $.getJSON(flickrURL, function(data) {
        let html = "";
        $.each(data.items, function(i, item) {
            let imgTitle = '"' + item.title + '"';
            console.log(imgTitle);
            html += "<a href=" + item.media.m + " data-lightbox=buildingPics data-title=" + imgTitle + ">" +
            "<img src=" + item.media.m + " alt=" + imgTitle + ">" +
            "</a>";
        });

        $('#new_building').append(html);
    });
});