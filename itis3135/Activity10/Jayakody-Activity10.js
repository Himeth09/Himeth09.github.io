$(document).ready(function() {

	// preload the image for each link
	$('#image-list a').each(function(){
		let image = new Image();
		image.src = $(this).attr('href');
	});

	// set up the event handlers for each link
	$('#image_list a').click(function(evt){
		
		// get the image URL and caption for each image and animate the caption
		let nextImage = $(this).attr('href');
		let nextCaption = $(this).attr('title');

		$('#caption').fadeOut(3000);
		$('#image').fadeOut(3000, function(){
			$('#image').attr('src', nextImage).fadeIn(3000);
			$('#caption').text(nextCaption).fadeIn(3000);
			$('#caption').animate({fontSize: '2.0em'},3000);
		});

		// cancel the default action of each link
		evt.preventDefault();
	});

	// move the focus to the first link
	$('li:first-child a').focus();
}); // end ready