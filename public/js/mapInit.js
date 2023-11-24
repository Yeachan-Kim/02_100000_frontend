let map;
function myMap() {
    let mapOptions = {
        center: new google.maps.LatLng(34.33, 130.1234),
        zoom: 16
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}