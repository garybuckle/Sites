/*          Strategy:
            Define the elements to hide and tag with a class
            Define the link to click on to hide the elements we want to hide
            Hide the elements when the page loads
            Toggle between the hide and show states when the user clicks
*/

/*
  Set up a variable to hold the contents and dump it to the console 
 note that the variable should be camel case what is that??? is an array - why and how do we know?
*/

//Make way for jquery


/*
var linkToHide = document.getElementsByClassName("to-hide");
console.log(linkToHide);


//set up the variable to hide the display - how do we do that?

linkToHide.item([0]).style.display = "none";

// Set up another variable to hold on to the bit we want to click on to hide and show
var clickToHide = document.getElementsByClassName("click-me");
// dump it to the console
console.log("The link to click on");
console.log(clickToHide);

// Now... The button is classified as an event in javascript

clickToHide.item([0]).addEventListener("click", toggleText);

// Here is the event listener and our toggle 
function toggleText() {
    
    console.log("Clicked");
    if (linkToHide.item(0).style.display === "none") {
        linkToHide.item(0).style.display = "block";
    } else {
        linkToHide.item(0).style.display = "none";
        // document.getElementsByClassName("click-me").style.

    }
}
*/


 //Jquery solution.

$(document).ready(function(){
    console.log("JQuery is loaded!");
    $(".to-hide").hide();

    $(".click-me").click(function () { 
        console.log('clicked')
       
       
        if ($(".to-hide").is(":visible")) {
            $(".to-hide").hide();
            $(".rec-title").css({'background':'green'});
        } else {
            $(".to-hide").show();
            $(".rec-title").css({'background':'red'});
        }
        
    });

  });


  $('#recipe-carousel').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

    





