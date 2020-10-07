<<<<<<< HEAD
$(document).ready(function(){
    console.log("ready");
    // $('#img1').hide();
    var images = $('img');
    // console.log(images);
    $(images).each(function (index,element) {
        console.log(index,element);
        // $(element).removeClass('.d-block')
        // $(element).addClass('.d-none');
        $(element).addClass('d-none');

      })
    $(images).eq(7).addClass('d-block');
    // console.log($(images).eq(3));
});
=======
$(document ).ready(function() {
    console.log( "Document is ready!" );
    //grab an element as a test

    $('.cell2').addClass("d-none");
    $('.cell7').addClass("d-none");
    });



>>>>>>> c0aaac313591d569309d7cbdc7059331734fb643
