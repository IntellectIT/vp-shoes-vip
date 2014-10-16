$(document).ready(function() {

    $('#foo2').carouFredSel({
        items: 5,
        auto: false,
        prev: '#prev2',
        next: '#next2',
        width: '100%',
        height: 80,
        responsive: true,
        pagination: "#pager2",
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });



/**************** slider for price changing in filter on catalog page ******************/
   

if($("#slider").length>0){
    var cost = {
        min: $('#minCost').val(),
        max: $('#maxCost').val()
    };

   $("#slider").slider({
        min: parseInt(cost.min),
        max: parseInt(cost.max),
        step: 100000,
        values: [parseInt(cost.min),parseInt(cost.max)],
        range: true,
        stop: function(event, ui) {
           $("input#minCost").val(parseInt(ui.values[0]));
           $("input#maxCost").val(parseInt(ui.values[1]));
           ajax_filter();
        },
        slide: function(event, ui){
            $("input#minCost").val(parseInt(ui.values[0]));
           $("input#maxCost").val(parseInt(ui.values[1]));
        }
    });

   $("input#minCost").change(function(){
        assocInputWithSlider();
        ajax_filter();
    });

    $("input#maxCost").change(function(){
        assocInputWithSlider();
        ajax_filter();
    });


    function assocInputWithSlider(){
        var slider_max = $( "#slider" ).slider( "option", "max" );
        var slider_min = $( "#slider" ).slider( "option", "min" );

        var min=parseInt($("input#minCost").val());
        var max=parseInt($("input#maxCost").val());

        if(min < slider_min){
            min = slider_min;
        }

        if (max > slider_max) { 
            max = slider_max; 
        }

       $( "#slider" ).slider( "option", "values", [ min, max ] );
    }
}

/***********************                 end slider       *************************/ 







    // фильтр
     $('.topFiltr').click(function(){
        /*var topFiltr = $(this).offset().top - $('#ajax_filter').offset().top;
        $('.filterFastResult').css('top', topFiltr);*/
        $(this).next().toggle();
        $('.fa',$(this)).toggle();
    }) 


    $('.secondline .submit').click(function(){
        $('.secondline .input-search').toggle();
    }) 



    //вызов fancybox
    if($('.product').length>0){
        $('.product').fancybox();
    }

		



});
