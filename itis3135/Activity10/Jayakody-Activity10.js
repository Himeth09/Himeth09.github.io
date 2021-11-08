$(document).ready(function() {

	// preload the image for each link
	$('#image-list a').each(function(){
		let image = new Image();
		image.src = $(this).children().attr('src');
	});

	// set up the event handlers for each link
	$('#image_list a').click(function(evt){
		
		// get the image URL and caption for each image and animate the caption
		// var nextImage = $('#image_list a img:first-child');
		// console.log(nextImage.attr('src'));
		// var nextCaption;
		// var nextImageSource;
		// setInterval(function (){
		// 	$('#caption').fadeOut(3000);
		// 	$('#image').fadeOut(3000, function(){
		// 		if($('#image_list a img').next().length == 0){
		// 			nextImage=('#image_list a img:first-child');
		// 		}else{
		// 			nextImage = $('#image_list a img').next();
		// 		}
		// 		nextImageSource = nextImage.src;
		// 		nextCaption = nextImage.alt;
		// 		$('#image').attr('src', nextImageSource).fadeIn(3000);
		// 		$('#caption').text(nextCaption).fadeIn(3000);
		// 	});
		// });
		let image, imageCounter=0, imageCache = [];
		$('#image_list li a img').each(function(){
			image = new Image();
			image.src = $(this).attr('src');
			image.title = $(this).attr('alt');
			imageCache[imageCounter] = image;
			imageCounter++;
		});

		imageCounter = 0;
		let nextImage;
		setInterval(function(){
			$('#caption').fadeOut(3000);
			$('#image').fadeOut(3000, function(){
				imageCounter = (imageCounter+1)%imageCache.length;
				nextImage = imageCache[imageCounter];
				$('#image').attr('src', nextImage.src).fadeIn(1000);
				$('#caption').text(nextImage.title).fadeIn(1000);
			}, 3000);
		});

		// cancel the default action of each link
		evt.preventDefault();
	});

	
	

	// move the focus to the first link

}); // end ready