/* Strategy - 
            Define the elements to hide and tag with  a class
            Define the link to click on to hide the elements we want to hide
            Hide the elements wjhen the page loads
            Toggle between the hide and show states when the user clicks
*/


// note that the linkToHide (camel case what is that???) is an array - why and how do yioiu
var linkToHide = document.getElementsByClassName("to-hide");
// console.log(" Stuff to hide");
// console.log("blah blah");
console.log(linkToHide);
//set up the 
linkToHide.item(0).style.display = "none";



// linkToHide[1].style.display = "none";

var clickToCollapse = document.getElementsByClassName("clickMe");
console.log("The link to click on");
console.log(clickToCollapse);

clickToCollapse[0].addEventListener("click", toggleText);

// Here is the event listener

function toggleText(e) {
    e.preventDefault();
    console.log("clicked");
    
if (linkToHide.item(0).style.display === "none") {
    linkToHide.item(0).style.display = "block";
} else {
    linkToHide.item(0).style.display = "none";
}
    


}


