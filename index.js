var spec1 = "vegalite_files/malaysia_map.vg.json";
var spec2 = "vegalite_files/poverty.vg.json";
var spec3 = "vegalite_files/demographic.vg.json";
vegaEmbed('#choropleth_map', spec1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#poverty_graph', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#demographic_heatmap', spec3).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
// vegaEmbed('#choropleth_map_2', spec2).then(function(result) {
//   // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);
// vegaEmbed('#plot_1', spec2).then(function(result) {
//   // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);