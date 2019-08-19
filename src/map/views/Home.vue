<template>
  <div id="map"></div>
</template>

<script>
import * as ZTMAP from "ztmap";
import { getBounds } from "../../data/map";
import { generateMarker } from "../../utils/map-utils";

export default {
  mounted() {
    const map = new ZTMAP.Map({
      container: "map",
      center: [120.96669037868332, 31.414776697732762],
      zoom: 11.5
      // pitch: 50
    });
    map.on("load", () => {
      generateMarker(this.$router, {
        addNoEvent: true,
        type: "town",
        name: "周市镇",
        latlng: [120.98307707345174, 31.461277153867087]
      }).addTo(map);
      generateMarker(this.$router, {
        type: "special",
        name: "周市再生资源综合利用项目",
        latlng: [121.0112746623, 31.4802199136]
      }).addTo(map);

      getBounds().then(result => {
        let data = result.data.data;
        const geoLineString = ZTMAP.GeoJSON.generateLineString(data);
        const lineStringLayer = new ZTMAP.Layer(
          geoLineString,
          {},
          {
            "line-color": "#3bb2d0",
            "line-width": 8
          }
        );
        const goePolygon = ZTMAP.GeoJSON.generatePolygon([data]);
        const polygonLayer = new ZTMAP.Layer(
          goePolygon,
          {},
          {
            "fill-color": "#3bb2d0",
            "fill-opacity": 0.3
          }
        );
        polygonLayer.addTo(map);
        lineStringLayer.addTo(map);
      });
    });
  }
};
</script>
