//INITIALIZES FLEXSLIDER
$(document).ready(function() {
    // var min = $('#min_cost_first').val();
    // var max = $('#max_cost_first').val();
    // var current = $('#current_max_cost').val();

    
    


	$("#slider").rangeSlider({
		arrows:false,
		defaultValues:{min: 12, max: 40},
        bounds:{min:0 , max: 200}
	});

        // $("#slider").bind("valuesChanged", function(e, data){
        //     // var form = $(this).parents('form');
        //     // $('.min_cost',form).val(data.values.min);
        //     // $('.max_cost',form).val(data.values.max);
            
        // });
        
        
      //  console.log(getUrlVars());
        // var param = getUrlVars();
        // if(param && param.min_cost ){
        //     $("#slider").rangeSlider("values", param.min_cost, param.max_cost);
        // }
        
       
       
       
       function getUrlVars() {
            if (!window.location.search) {
                return({});   // return empty object
            }
            var parms = {};
            var temp;
            var items = window.location.search.slice(1).split("&");   // remove leading ? and split
            for (var i = 0; i < items.length; i++) {
                temp = items[i].split("=");
                if (temp[0]) {
                    if (temp.length < 2) {
                        temp.push("");
                    }
                    parms[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);        
                }
            }
            return(parms);
        }
});