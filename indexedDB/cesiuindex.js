/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-01-11 16:34:55
 * @LastEditors: Andy
 * @LastEditTime: 2024-01-11 16:42:56
 */



// import './CesiumOfflineCache/CesiumOfflineCache.min.js';


// CesiumOfflineCache.ruleList.add('*');
//     var url;
//     Cesium.Ion.defaultAccessToken =
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNzRiNzNkYS0zZTRmLTRhOTMtODFlNS0zOWFhN2FmYzZmYjkiLCJpZCI6MTUyMTEwLCJpYXQiOjE2ODg2OTYyMDl9.sWkoSUmLFPfbMTMFgAZeQKjBQERg-TZPBBtIN34sDNQ";
//     var viewer = new Cesium.Viewer("cesiumContainer", {
//         imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
//             url: "https://elevation3d.arcgis.com/arcgis/rest/services/World_Imagery/MapServer",
//         }),
//     });







// // Cesium.Resource._Implementations.loadWithXhr


// CesiumOfflineCache.ruleList.add('*');
// let viewer = new Cesium.Viewer('MapContainer', {
//     imageryProvider: new Cesium.UrlTemplateImageryProvider({
//         url: 'https://c.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
//         tilingScheme: new Cesium.WebMercatorTilingScheme(),
//         maximumLevel: 19
//     }),
//     timeline: false,
//     animation: false
// });

// viewer.scene.camera.setView({
//     destination: Cesium.Cartesian3.fromDegrees(-122.3472, 47.598, 370),
//     orientation: {
//         heading: Cesium.Math.toRadians(10),
//         pitch: Cesium.Math.toRadians(-10)
//     }
// });

// setTimeout(() => {
//     let tileSet = Cesium.createOsmBuildings();
//     viewer.scene.primitives.add(tileSet);
// }, 3000);