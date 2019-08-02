<template>
  <div id="app">
    <div id="map"></div>
  </div>
</template>

<script>
import * as ZTMAP from "ztmap";
export default {
  mounted() {
    const map = new ZTMAP.Map({
      container: "map",
      center: [120.99837556097032, 31.467553401181732],
      zoom: 18.5,
      pitch: 60
    });
    map.on("load", () => {
      // map.addDebugControl();
      const el = document.createElement("div");
      el.id = "marker";
      el.style.backgroundImage = "url(./images/icon/icon3.png)";
      el.style.width = "149px";
      el.style.height = "109px";
      const marker = new ZTMAP.HtmlMarker(
        el,
        [120.99837922507027, 31.467860334461136],
        { draggable: false }
      );
      marker.addTo(map);

      let data = [
        [120.99869553445393, 31.469688069102986],
        [120.99702147956367, 31.468721075403778],
        [120.99676840607458, 31.46862457914378],
        [120.99721193578972, 31.468140827891517],
        [120.99697643154451, 31.467924954180532],
        [120.99756430594488, 31.467216609367014],
        [120.99808154161275, 31.4667772672896],
        [120.99863800220317, 31.467319996281518],
        [120.99952620491251, 31.467960354411474],
        [120.99964780783819, 31.46813395517013],
        [120.99962962524847, 31.468457883366582],
        [120.99951459407998, 31.46869793326198],
        [120.99922464126422, 31.469133332911255],
        [120.99869553445393, 31.469688069102986]
      ];
      const geojsonLineString = ZTMAP.GeoJSON.generateLineString(data);
      const lineStringLayer = new ZTMAP.Layer(
        geojsonLineString,
        {},
        {
          "line-color": "#009de2",
          "line-width": 8
        }
      );
      const goePolygon = ZTMAP.GeoJSON.generatePolygon([data]);
      const polygonLayer = new ZTMAP.Layer(
        goePolygon,
        {},
        {
          "fill-color": "#009de2",
          "fill-opacity": 0.3
        }
      );
      polygonLayer.addTo(map);
      lineStringLayer.addTo(map);
    });
  }
};
</script>
