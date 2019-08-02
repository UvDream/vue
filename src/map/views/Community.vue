<template>
  <div id="map"></div>
</template>

<script>
import * as ZTMAP from "ztmap";
export default {
  mounted() {
    const map = new ZTMAP.Map({
      container: "map",
      center: [120.98874043453816, 31.46023507349709],
      zoom: 17.2,
      pitch: 60
    });
    map.on("load", () => {
      // map.addDebugControl();
      const el = document.createElement("div");
      el.id = "marker";
      el.style.backgroundImage = "url(./images/icon/icon1.png)";
      el.style.width = "149px";
      el.style.height = "109px";
      const marker = new ZTMAP.HtmlMarker(
        el,
        [120.98874043453816, 31.46023507349709],
        { draggable: false }
      );
      marker.addTo(map);

      let data = [
        [120.9870843357321, 31.46227503366461],
        [120.98641148526548, 31.458731567215224],
        [120.98909313567464, 31.458981111495078],
        [120.99060461136025, 31.45892288455805],
        [120.99189180354796, 31.461825869284226],
        [120.9870843357321, 31.46227503366461]
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
