var linkToHide = document.getElementsByClassName("to-hide");
console.log(linkToHide);
//linkToHide[0].style.display = "none";
//linkToHide[1].style.display = "none";

function reveal() {
    console.log('revealed')
    
}


//linkToHide.addEventListener('click', reveal);
linkToHide[0].addEventListener('click', reveal)

