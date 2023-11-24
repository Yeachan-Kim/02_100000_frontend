const mapSearch = $("#map-search-btn");
const searchInput = $("#autocomplete_search");
const latInput = $("#lat");
const longInput = $("#long");
let input;
let autocomplete;
let place;
let lat;
let long;

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    let input = document.getElementById('autocomplete_search');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {
        place = autocomplete.getPlace();

        // place variable will have all the information you are looking for.

        latInput.val(place.geometry['location'].lat());
        longInput.val(place.geometry['location'].lng());
    });
}

mapSearch.click(function (e) {
    lat = place.geometry['location'].lat();
    long = place.geometry['location'].lng();
    console.log(lat);
    console.log(long);
    $("#latlong").html(`target : ${lat}, ${long}`);
})