$(window).ready(function() {
  $('.loader').fadeOut("slow");
});


var d3locale = d3.formatDefaultLocale({
    "thousands": ",",
    "grouping": [3],
});

L.TopoJSON = L.GeoJSON.extend({
  addData: function(jsonData) {
    if (jsonData.type === 'Topology') {
      for (key in jsonData.objects) {
        geojson = topojson.feature(jsonData, jsonData.objects[key]);
        L.GeoJSON.prototype.addData.call(this, geojson);
      }
    } else {
      L.GeoJSON.prototype.addData.call(this, jsonData);
    }
  }
});
// Copyright (c) 2013 Ryan Clark

// var createLabelIcon = function(labelClass, labelText) {
//   return L.divIcon({
//     className: labelClass,
//     html: labelText
//   })
// }
//


var worldBounds = L.latLngBounds(
  L.latLng(-60, -100), //Southwest
  L.latLng(80, 15) //Northeast
);



//totalConfirmed
function tc(country) {
  if (country == undefined) {
    country = 0
  } else {
    country = +country.split("-")[0];
  }
  return country;
}

//totalRecovered
function tr(country) {
  if (country.split("-")[2] == undefined) {
    country = 0
  } else {
    country = +country.split("-")[2];
  }
  return country;
}

//totalDeath
function td(country) {
  if (country.split("-")[3] == undefined) {
    country = 0
  } else {
    country = +country.split("-")[3];
  }
  return country;
}
