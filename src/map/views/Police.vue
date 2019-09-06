<template>
  <div id="map"></div>
</template>

<script>
import * as ZTMAP from "ztmap";
import axios from "axios";

export default {
  mounted() {
    let { name } = this.$route.query;
    axios.post("/location/getPolicePoints", { name }).then(result => {
      // axios.get("/json/map/police/policePoints.json", { name }).then(result => {
      const data = result.data;
      const map = new ZTMAP.Map({
        container: "map",
        center: data.center,
        zoom: 13.2,
        pitch: 50
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
