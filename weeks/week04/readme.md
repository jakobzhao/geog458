# Making Thematic Map on the Internet using MapBox

## Major Steps

-  the skeleton of a basic web map
   -  host web map
   -  html structure
   -  mapbox token
   -  map object, zoom level, center, and projection (map for a global, reginal or local areas)
   -  example: [A basic map](https://jakobzhao.github.io/geog458/weeks/week04/1_basic.html)
-  base map options
   -  monochrome -- `gray or dark background, good for most of the thematic maps`
   -  street map
   -  satellite imagery
   -  terrain
-  thematic layers
   -  search (on primary search engines), collect (data API) or create (QGIS, geojson.io) geojson files
   -  convert the original data in WGS84 project (EPSG: 4326)
   -  load geojson as vector layers
      -  native or non-native asynchronous data loading
      -  examples: [native async]((https://jakobzhao.github.io/geog458/weeks/week04/3_native_data_loading.html)) and [non-native async]((https://jakobzhao.github.io/geog458/weeks/week04/3_async_data_loading.html))
   -  *loading pre-cache tiles as vector layers*
   -  visual strategies
      -  Choropleth
      -  Proportional symbols
      -  Heatmap
      -  Dot map
      -  `Optional` 3D extrusion map
   -  legend
   -  other information
-  interactive elements
   -  click on an geographical feature
   -  more