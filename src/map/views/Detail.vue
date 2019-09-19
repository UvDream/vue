<template>
  <div id="map"></div>
</template>

<script>
import { generateMarker } from "../../utils/map-utils";
import * as ZTMAP from "ztmap";
import { getSinglePoint } from "../../data/map";

export default {
  mounted() {
    let { name, type } = this.$route.query;
    getSinglePoint(name, type).then(result => {
      let data = result.data;
      const map = new ZTMAP.Map({
        container: "map",
        center: data.center,
        zoom: data.zoom,
        pitch: data.pitch
      });
      map.on("load", () => {
        map.addDebugControl();
        let { name, type, latlng } = data;
        generateMarker(this.$router, { name, type, latlng }).addTo(map);
        let bounds = data.bounds;
        new ZTMAP.Layer(
          ZTMAP.GeoJSON.generateLineString(bounds),
          {},
          {
            "line-color": "#009de2",
            "line-width": 8
          }
        ).addTo(map);
        new ZTMAP.Layer(
          ZTMAP.GeoJSON.generatePolygon([bounds]),
          {},
          {
            "fill-color": "#009de2",
            "fill-opacity": 0.3
          }
        ).addTo(map);
      });
    });
  }
};
</script>
