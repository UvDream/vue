<template>
  <div id="map"></div>
</template>

<script>
import * as ZTMAP from "ztmap";
import axios from "axios";

export default {
  mounted() {
    let { name } = this.$route.query;
    name = name || "";
    axios.post("/location/getPolicePoints", { name }).then(result => {
      // axios.get("/json/map/police/policePoints.json", { name }).then(result => {
      const data = result.data;
      const map = new ZTMAP.Map({
        container: "map",
        center: name ? data.center : [120.96669037868332, 31.414776697732762],
        zoom: name ? 13.2 : 11.5,
        pitch: name ? 50 : 0
      });
      map.on("load", () => {
        data.data.map(val => {
          let el = document.createElement("div");
          el.className = `marker-${val.type}`;
          new ZTMAP.HtmlMarker(el, val.latlng, { draggable: false }).addTo(map);
        });
      });
    });
  }
};
</script>
