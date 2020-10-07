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
