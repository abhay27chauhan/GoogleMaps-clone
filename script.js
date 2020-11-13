mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtYWJoYXkiLCJhIjoiY2toZnhkYXRkMHoyODJxdDl3MDNwMnV0OCJ9._GioShffk5JkfCcALZ68Dw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');

    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');
    
    function switchLayer(layer) {
    var layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }

}