document.querySelector('.btn-burger').addEventListener('click',()=> { 
    document.querySelector('.menu').classList.toggle('show')
});



$(document).ready(function(){

    $('.flexslider').flexslider({

        prevText: "",
        nextText: "",
        pauseOnAction: false,
        slideshowSpeed: 3000,
        animation: "slide",
    })
});

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:false,
        prevHtml: '',
        slideMargin: 37,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidth2').lightSlider({
        autoWidth:true,
        loop:false,
        slideMargin: 30,
        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });