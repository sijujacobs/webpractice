
var images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg"
];
    $nextIndex = 1;			// fixed, please do not modfy;
	$currentIndex = 0;		// fixed, please do not modfy;
	$interval = 2500;	// You can set single picture show time;
	$fadeTime = 7500;	// You can set fadeing-transition time;
	$imgNum = images.length;		// How many pictures do you have
 
$(document).ready(function(){
    nextFadeIn();
});

function nextFadeIn(){
    //make image fade in and fade out at one time, without splash vsual;
    $('.fadeImg img').eq($currentIndex).fadeOut($fadeTime).delay($interval)
    .end().eq($nextIndex).hide().fadeIn($fadeTime, nextFadeIn).delay($interval);
        
    // if You have 5 images, then (eq) range is 0~4 
    // so we should reset to 0 when value > 4; 
    if($nextIndex < $imgNum-1){ $nextIndex++; } else { $nextIndex = 0;}
    if($currentIndex < $imgNum-1){ $currentIndex++; } else { $currentIndex =0; }
};

// $("#imageSlider > img:gt(0)").hide();

// function cycleImages(){
//     var $active = $('#imageSlider .active');
//     var $next = ($active.next().length > 0) ? $active.next() : $('#imageSlider img:first');
//     $next.css('z-index', 2);//move the next image up the pile
//     $active.fadeOut(5500,function(){//fade out the top image
//         $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
//         $next.css('z-index', 3).addClass('active');//make the next image the top one
//     });
//   }

// $(document).ready(function(){
// // run every 4s
// setInterval('cycleImages()', 4000);
// })

// setInterval(function() {
//   $('#imageSlider > img:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#imageSlider');
// }, 2000);


// function startSlideShow(){
//     var visibleImage = $("#imageSlider img.isVisible");
//     console.log(' :: visibleImage : ', visibleImage);
//     var nextImage = visibleImage.next().length ? visibleImage.next() : visibleImage.parent().children(':first');
//     visibleImage.fadeOut(1000, function(){
//         nextImage.fadeIn(2200).addClass('isVisible');
//     }).removeClass("isVisible");
// }
// setInterval(startSlideShow, 2000);


// document.getElementById("imageSlide").setAttribute("src", images[0]);

// var total = images.length;
// var imagecounter = 0;

// function slider() {
//     if (imagecounter < total) {
//         imagecounter++;
//     }

//     if (imagecounter == total) {
//         imagecounter = 0;
//     }
//     $("#imageSlide").attr("src", images[imagecounter]);
// }
// setInterval(slider, 5000);

