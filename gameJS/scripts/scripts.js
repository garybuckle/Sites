// JavaScipt equivalent of gamme not using JQuery

// get the images and dump to the console so we can see what is grabbed
var allImages = document.images;
console.log(allImages);
// We can manipulate the images a bit to test
console.log("Second Image " + allImages[1].src);
console.log ("There are " + allImages.length + " images");


// hide an image to test, grab the second image or the 7th image
// Remember that arrays strat at zero.

allImages[6].style.display = "none";
