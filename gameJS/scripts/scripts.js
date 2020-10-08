// JavaScipt equivalent of game not using JQuery

// get the images and put them into an array 
// so we can see what is grabbed, dump to the console 
// 
var allImages = document.images;
console.log(allImages);
// We can manipulate the images a bit to test
// print the contents of the secon image
// to the console along with amount of images
console.log("Second Image " + allImages[1].src);
console.log ("There are " + allImages.length + " images");


// hide an image to test, grab the second image 
// or the 7th image.Remember that arrays start at zero.

allImages[6].style.display = "none";
