// Map
let map;

function initMap() {
    "use strict";
    let pos = new google.maps.LatLng(52.51663, 13.38978);
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 16,
    });
    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: 'image/icons/map-marker.png',
    });
}