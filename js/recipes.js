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
var linkToHide = document.getElementsByClassName("to-hide");
console.log(linkToHide);


//set up the variable to hide the display - how do we do that?

linkToHide.item([0]).style.display = "none";

// Set up another variable to hold on to the bit we want to click on to hide and show
var clickToHide = document.getElementsByClassName("clickMe");
// dump it to the console
console.log("The link to click on");
console.log(clickToHide);

// Now... The click is classified as an event in javascript

clickToHide.item([0]).addEventListener("click", toggleText);

// Here is the event listener and our toggle 
function toggleText(e) {
    e.preventDefault();
    console.log("Clicked");


    if (linkToHide.item(0).style.display === "none") {
        linkToHide.item(0).style.display = "block";
    } else {
        linkToHide.item(0).style.display = "none";
    }


}

    





