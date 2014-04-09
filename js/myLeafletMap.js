var lusaka = [-15.4168299, 28.343753]
var bongohive = [-15.392088, 28.303842]
var zoomLevel = 15

var leafletMap = L.map('map').setView(bongohive, zoomLevel);

var API_KEY = '2515f952e6c3418488627c3e24cd773b';

L.tileLayer('http://{s}.tile.cloudmade.com/' + API_KEY + '/997/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; [...]',
	maxZoom: 18
}).addTo(leafletMap);