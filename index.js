require('jquery');
require('mapbox.js');
var _ = require('underscore');
var locationFilter = require('leaflet.locationfilter');

L.mapbox.accessToken = 'pk.eyJ1Ijoic2FtYW4iLCJhIjoiS1ptdnd0VSJ9.19qza-F_vXkgpnh80oZJww';
var map = L.mapbox.map('map', 'saman.2os3v7vi');

var locationFilter = new L.LocationFilter().addTo(map);

locationFilter.on("change", function (e) {
    // Do something when the bounds change.
    // Bounds are available in `e.bounds`.
});

locationFilter.on("enabled", function () {
    // Do something when enabled.
});

locationFilter.on("disabled", function () {
    // Do something when disabled.
});
