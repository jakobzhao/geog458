// 1. Create a map object.
var mymap = L.map('map', {
    center: [47.7511, -120.7401],
    zoom: 7,
    maxZoom: 10,
    minZoom: 3,
    detectRetina: true});

// 2. Add a base map.
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

// 3. Add cell towers GeoJSON Data
// Null variable that will hold cell tower data
var cellTowers = null;

// 4. build up a set of colors from colorbrewer's dark2 category
var colors = chroma.scale('Dark2').mode('lch').colors(13);

// 5. dynamically append style classes to this page. This style classes will be used for colorize the markers.
for (i = 0; i < 13; i++) {
    $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

// Get GeoJSON and put on it on the map when it loads
cellTowers= L.geoJson.ajax("assets/celltowers.geojson", {
    // assign a function to the onEachFeature parameter of the cellTowers object.
    // Then each (point) feature will bind a popup window.
    // The content of the popup window is the value of `feature.properties.company`
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.LICENSEE);
        return feature.properties.LOCCOUNTY;
    },
    pointToLayer: function (feature, latlng) {
        var id = 0;
        if (feature.properties.LICENSEE == "AT&T MOBILITY WIRELESS OPERATIONS HOLDINGS, INC.") { id = 0; }
        else if (feature.properties.LICENSEE == "EASTERN SUB-RSA LIMITED PARTNERSHIP")  { id = 1; }
        else if (feature.properties.LICENSEE == "MCDANIEL CELLULAR TELEPHONE COMPANY")  { id = 2; }
        else if (feature.properties.LICENSEE == "NEW CINGULAR WIRELESS PCS, LLC")  { id = 3; }
        else if (feature.properties.LICENSEE == "OREGON RSA #2, INC.")  { id = 4; }
        else if (feature.properties.LICENSEE == "RCC MINNESOTA, INC.")  { id = 5; }
        else if (feature.properties.LICENSEE == "SEATTLE SMSA LIMITED PARTNERSHIP")  { id = 6; }
        else if (feature.properties.LICENSEE == "USCOC OF RICHLAND, INC.")  { id = 7; }
        else if (feature.properties.LICENSEE == "USCOC OF WASHINGTON-4, INC.")  { id = 8; }
        else if (feature.properties.LICENSEE == "VERIZON WIRELESS (VAW), LLC")  { id = 9; }
        else if (feature.properties.LICENSEE == "WASHINGTON RSA #8 LIMITED PARTNERSHIP")  { id = 10; }
        else if (feature.properties.LICENSEE == "WESTERN SUB-RSA LIMITED PARTNERSHIP")  { id = 11; }
        else { id = 12;} // "Yakima MSA limited partnership"
        return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-signal marker-color-' + (id + 1).toString() })});
    },
    attribution: 'Cell Tower Data &copy; HIFLD | Washington counties &copy; Washington Data & Research | Base Map &copy; CartoDB | Made By Bo Zhao'
}).addTo(mymap);

// 6. Set function for color ramp
colors = chroma.scale('YlOrRd').colors(5);

function setColor(density) {
    var id = 0;
    if (density > 61) { id = 4; }
    else if (density > 46 && density <= 60) { id = 3; }
    else if (density > 12 && density <= 45) { id = 2; }
    else if (density > 3 &&  density <= 11) { id = 1; }
    else  { id = 0; }
    return colors[id];
}

// 7. Set style function that sets fill color.md property equal to cell tower density
function style(feature) {
    return {
        fillColor: setColor(feature.properties.CTNUM / (feature.properties.POP / 100000)),
        fillOpacity: 0.4,
        weight: 2,
        opacity: 1,
        color: '#b4b4b4',
        dashArray: '4'
    };
}

// 8. Add county polygons
// create counties variable, and assign null to it.
var counties = null;
counties = L.geoJson.ajax("assets/wacountydata.geojson", {
    style: style
}).addTo(mymap);


// 9. Create Leaflet Control Object for Legend
var legend = L.control({position: 'topright'});

// 10. Function that runs when legend is added to map
legend.onAdd = function () {

    // Create Div Element and Populate it with HTML
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b># Cell Tower per 100k residents</b><br />';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p> 61+ </p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p> 46-60 </p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p> 12-45 </p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p> 3-11 </p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> 0-2 </p>';
    div.innerHTML += '<hr><b>Company<b><br />';
    div.innerHTML += '<i class="fa fa-signal marker-color-1"></i><p> AT&T </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-2"></i><p> Eastern Sub-RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-3"></i><p> McDaniel </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-4"></i><p> New Cingular </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-5"></i><p> Oregon RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-6"></i><p> RCC Minnesota </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-7"></i><p> Seattle SMSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-8"></i><p> US Cellular - Richland </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-9"></i><p> US Cellular -Washington </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-10"></i><p> Verizon </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-11"></i><p> Washington RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-12"></i><p> Western Sub-RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-13"></i><p> Yakima </p>';
    // Return the Legend div containing the HTML content
    return div;
};

// 11. Add a legend to map
legend.addTo(mymap);

// 12. Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);
