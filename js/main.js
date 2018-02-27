/* Gömmer menyn när länk klickas */
jQuery(function($){
    $('.navbar .navbar-nav > li > a').click(function() {
        $('.navbar .navbar-collapse').collapse('hide')
    });
});


function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(59.334591, 18.063240),
    zoom: 7,
    zoomControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
      animation: google.maps.Animation.BOUNCE
    }
  };

  var map = new google.maps.Map(mapCanvas ,mapOptions);
}
