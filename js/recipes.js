var linkToHide = document.getElementsByClassName("to-hide");
// console.log(" Stuff to hide");
// console.log("blah blah");
console.log(linkToHide);
linkToHide[0].style.display = "none";



// linkToHide[1].style.display = "none";

var clickToCollapse = document.getElementsByClassName("clickMe");
console.log("The link to click on");
console.log(clickToCollapse);

clickToCollapse[0].addEventListener("click", toggleText);

function toggleText(e) {
    e.preventDefault();
    console.log("clicked");
if (linkToHide[0].style.display === "none") {
    linkToHide[0].style.display = "block";
} else {
    linkToHide[0].style.display = "none";
}
    


}


