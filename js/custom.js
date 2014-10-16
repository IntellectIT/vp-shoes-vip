$(document).ready(function() {

    $('#foo2').carouFredSel({
        auto: false,
        prev: '#prev2',
        next: '#next2',
        pagination: "#pager2",
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });
    // фильтр
     $('.topFiltr').click(function(){
        var topFiltr = $(this).offset().top - $('#ajax_filter').offset().top;
        $('.filterFastResult').css('top', topFiltr);
    }) 


    $('.secondline .submit').click(function(){
        $('.secondline .input-search').show();
    }) 
    //вызов fancybox
    $('.product').fancybox();
          

		



});
