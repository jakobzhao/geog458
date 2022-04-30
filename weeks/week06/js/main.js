mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 5, // starting zoom
    minZoom: 5,
    center: [138, 38] // starting center
});

let earthquakeChart = null,
    magnitude = {},
    numEarthquakes = 0;

const grades = [4, 5, 6],
    colors = ['rgb(208,209,230)', 'rgb(103,169,207)', 'rgb(1,108,89)'],
    radii = [5, 15, 20];


async function geojsonFetch() {

    // Await operator is used to wait for a promise. 
    // An await can cause an async function to pause until a Promise is settled.
    let response;
    response = await fetch('assets/earthquakes.geojson');
    earthquakes = await response.json();



    //load data to the map as new layers.
    //map.on('load', function loadingData() {
    map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function

        // when loading a geojson, there are two steps
        // add a source of the data and then add the layer out of the source
        map.addSource('earthquakes', {
            type: 'geojson',
            data: earthquakes
        });


        map.addLayer({
                'id': 'earthquakes-point',
                'type': 'circle',
                'source': 'earthquakes',
                'minzoom': 5,
                'paint': {
                    // increase the radii of the circle as the zoom level and dbh value increases
                    'circle-radius': {
                        'property': 'mag',
                        'stops': [
                            [{
                                zoom: 5,
                                value: grades[0]
                            }, radii[0]],
                            [{
                                zoom: 5,
                                value: grades[1]
                            }, radii[1]],
                            [{
                                zoom: 5,
                                value: grades[2]
                            }, radii[2]]
                        ]
                    },
                    'circle-color': {
                        'property': 'mag',
                        'stops': [
                            [grades[0], colors[0]],
                            [grades[1], colors[1]],
                            [grades[2], colors[2]]
                        ]
                    },
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    'circle-opacity': 0.6
                }
            },
            'waterway-label'
        );


        // click on tree to view magnitude in a popup
        map.on('click', 'earthquakes-point', (event) => {
            new mapboxgl.Popup()
                .setLngLat(event.features[0].geometry.coordinates)
                .setHTML(`<strong>Magnitude:</strong> ${event.features[0].properties.mag}`)
                .addTo(map);
        });



        // 7 Chart relevant operations
        // 7.1 generate the declared dictionary object "counties".
        // add the county name as key and the number of cell tower as values in a dictionary declared before
        // let mapBound = map.getBounds();

        magnitudes = calEarthquakes(earthquakes, map.getBounds());
        numEarthquakes = magnitudes[4] + magnitudes[5] + magnitudes[6];
        document.getElementById("earthquake-count").innerHTML = numEarthquakes;


        // 7.4 slicing the arrays
        // only keep the top 10 values, and push “county” to the first of the array.
        x = Object.keys(magnitudes);
        x.unshift("mag")

        // only keep the top 10 values, and push “#” to the first of the array.
        y = Object.values(magnitudes);
        y.unshift("#")


        // 7.5 generate the chart


        earthquakeChart = c3.generate({
            size: {
                height: 350,
                width: 460
            },
            data: {
                x: 'mag',
                columns: [x, y], //input the x - sorted county number, y - the corresponding # of cell towers.
                type: 'bar', //a bar chart
                onclick: function (d) { // update the map and sidebar once the bar is clicked.
                    let floor = parseInt(x[1 + d["x"]]),
                        ceiling = floor + 1;
                    map.setFilter('earthquakes-point', ['all', ['>=', 'mag', floor],
                        ['<', 'mag', ceiling]
                    ]);
                }
            },
            axis: {
                x: { //county
                    type: 'category',
                },
                y: { //count
                    tick: {
                        values: [10, 20, 30, 40]
                    }
                }
            },
            legend: {
                show: false
            },
            bindto: "#earthquake-chart" //bind the chart to the place holder element "county-chart".
        });

    });



    //load data to the map as new layers.
    //map.on('load', function loadingData() {
    map.on('idle', () => { //simplifying the function statement: arrow with brackets to define a function
        // 7 Chart relevant operations
        // 7.1 generate the declared dictionary object "counties".
        // add the county name as key and the number of cell tower as values in a dictionary declared before
        magnitudes = {
            4: 0,
            5: 0,
            6: 0
        };

        magnitudes = calEarthquakes(earthquakes, map.getBounds());
        numEarthquakes = magnitudes[4] + magnitudes[5] + magnitudes[6];
        document.getElementById("earthquake-count").innerHTML = numEarthquakes;


        // 7.4 slicing the arrays
        // only keep the top 10 values, and push “county” to the first of the array.
        x = Object.keys(magnitudes);
        x.unshift("mag")

        // only keep the top 10 values, and push “#” to the first of the array.
        y = Object.values(magnitudes);
        y.unshift("#")

        // 7.5 generate the chart
        earthquakeChart.load({
            columns: [x, y]
        });

    });



}


// call the function
geojsonFetch();


// create legend
const legend = document.getElementById('legend');

//set up legend grades and labels
var labels = ['<strong>Magnitude</strong>'],
    vbreak;
//iterate through grades and create a scaled circle and label for each
for (var i = 0; i < grades.length; i++) {
    vbreak = grades[i];
    // you need to manually adjust the radius of each dot on the legend 
    // in order to make sure the legend can be properly referred to the dot on the map.
    dot_radii = 2 * radii[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
        'px; height: ' +
        dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
        '</span></p>');

}
const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://earthquake.usgs.gov/earthquakes/">USGS</a></p>';

legend.innerHTML = labels.join('') + source;


function calEarthquakes(currentEarthquakes, currentMapBounds) {
    // let mapBound = map.getBounds();
    // let earthquakeCount = 0;
    let magnitudesClasses = {
        4: 0,
        5: 0,
        6: 0
    };
    currentEarthquakes.features.forEach(function (d) {

        if (currentMapBounds.contains(d.geometry.coordinates)) {
            // earthquakeCount += 1;
            magnitudesClasses[Math.floor(d.properties.mag)] += 1;
        }

    })
    return magnitudesClasses;
}