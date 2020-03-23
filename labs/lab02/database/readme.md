# Spatial Database

**Meeting:** Wednesdays, 2:30 - 5:20, SMI 109

**Instructor:** Bo Zhao, SMI 416B, Office hours by appointment

**Contact:** 206.685.3846, zhaobo@uw.edu, jakobzhao `skype/wechat`

**Keywords:** Uncertainty, Post-truth and location spoofing

## Readings

* MacEachren, A.M., Robinson, A., Hopper, S., Gardner, S., Murray, R., Gahegan, M. and Hetzler, E., 2005. Visualizing geospatial information uncertainty: What we know and what we need to know. Cartography and Geographic Information Science, 32(3), pp.139-160.

* Kwan, M.P., 2012. The uncertain geographic context problem. Annals of the Association of American Geographers, 102(5), pp.958-968.

* Zhang, S., Zhao, B, in revision. Stand with #StandingRock: Envisioning an epistemological shift in understanding geospatial big data in the “post-truth” era

***Extending readings***

* Couclelis, H., 2003. The certainty of uncertainty: GIS and the limits of geographic knowledge. Transactions in GIS, 7(2), pp.165-175.

* Goodchild, M.F., 1998. Uncertainty: the Achilles heel of GIS. Geo Info Systems, 8(11), pp.50-52.

* Zhao, B. and Zhang, S., 2019. Rethinking spatial data quality: Pokémon go as a case study of location spoofing. The Professional Geographer, 71(1), pp.96-108.


## [Practical Exercise 3: Spatial database management using SpatiaLite](pe.md)


In this practical execerise, we introduce how to manage a spatial database using spatialite. In the GIS industry, there are multiple spatial databases, such as ESRI geodatabase, postgresql(with postgis), Oracle, and spatialite. These databases are designed for database of different size and in different uages. Spatialite is a file based database, derived from sqlite and supported by a few open source GIS libraries. It is worth noting that, compared to other existing databases, Spatailite can apply for mobile development and multiple operating systems. Since Spatialite can manage both spatial data and common attribute data tables in one database file, it actually makes the geospatial data management much easier if compared with Shapefiles which needs multiple files to store one piece of geospatial data. Besides, SpatiaLite has extended the common SQL functions and supported a series of spatial functions to conduct advanced spatail queries or joins. Thus, to get familiarw with its functions and usages, this practical exercise will introduce how to build a spatialite database, create data tables, insert geospatial data, and eventually visualize and analyse the data in a geographical layout. This execerise actually extends the [`02_geosearch.py`](../03_bot/02_geosearch.py) from the praticial exercise of last week, the harvested data will save in a spatialite database instead of a csv file. Okay, let us get started!
