	

/*== Asynchronous Loading Google Maps ==============================*/

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      // 'callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript;

// $('.map_content').fancybox({
            // iframe: {
            //     preload: false
            // },
            // afterShow : function() {
            //         debugger;
            //       var myLatlng = new google.maps.LatLng($('#map_1 .map').attr('data-lat'),$('#map_1 .map').attr('data-lng'));
            //       var mapOptions = {
            //         zoom: 18,
            //         scrollwheel: false,
            //         mapTypeControl:false,
            //         streetViewControl:false,
            //         center: myLatlng,
            //         mapTypeControlOptions: {
            //             mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            //           },
            //           mapTypeId: MY_MAPTYPE_ID
            //       };



            //       var map = new google.maps.Map($('#map_1 .map'), mapOptions);

            //       var marker = new google.maps.Marker({
            //           position: myLatlng,
            //           map: map
            //       });

            // }
       // });

/*-----------------------------------------------------------------*/

/*---------------------------------------------------------------

		
/*== Google Maps settings =========================================*/
/*
 * define the coordinates of your company
 */


 all_maps = [];

var MY_MAPTYPE_ID = 'custom_style';

function init_one_map(cont,lat,lng){
  var map;
  var featureOpts = [];
       
  // lat = lat||53.926278;
  // lng = lng||27.517380; 

  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    mapTypeControl:false,
    streetViewControl:false,
    center: myLatlng,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
  };



  var map = new google.maps.Map(cont, mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
  });

  var styledMapOptions = {
        name: 'Custom Style'
      };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions); 
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
 var id = $(cont).parent().attr('id');
  all_maps[id] = map;
}

 $('.map_content').fancybox({
        beforeShow: function () {

            initialize();
        }
   });

// Find users current position
    // navigator.geolocation.getCurrentPosition(success, fail, {enableHighAccuracy:true, timeout: 6000, maximumAge: 50000  });


function initialize() {
  $('.map').each(function(){
     init_one_map(this,$(this).attr('data-lat'),$(this).attr('data-lng'));
  })
}









