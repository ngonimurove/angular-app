var lusaka = [-15.4168299, 28.343753]
var bongoHive = [-15.392088, 28.303842]
var zoomLevel = 13

var leafletMap = L.map('map').setView(bongoHive, zoomLevel);

var API_KEY = '2515f952e6c3418488627c3e24cd773b';

L.tileLayer('http://{s}.tile.cloudmade.com/' + API_KEY + '/997/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; [...]',
	maxZoom: 18
}).addTo(leafletMap);

var marker = L.marker(bongoHive).addTo(leafletMap);