<template>
  <div id="map"></div>
</template>

<script>
import * as ZTMAP from "ztmap";
export default {
  mounted() {
    let _this = this;
    ZTMAP.MAPSTYLE.MAPURL = _this.$store.state.outerMapUrl;
    ZTMAP.MAPSTYLE.MAPFONTSURL =
      location.origin + _this.$store.state.mapFontsUrl;
    ZTMAP.MAPSTYLE.MAPSPRITEURL =
      location.origin + _this.$store.state.mapSpriteUrl;
    ZTMAP.MAPSTYLE.STYLE = ZTMAP.MAPBASICLAYERSTYLE.KAILIDE_DARK;
    const map = new ZTMAP.Map({
      container: "map",
      center: [121.01101297650985, 31.451105926705637],
      zoom: 16.2,
      pitch: 60
    });
    map.on("load", () => {
      // map.addDebugControl();
      const el = document.createElement("div");
      el.id = "marker";
      el.style.backgroundImage = "url(./images/icon/icon2.png)";
      el.style.width = "240px";
      el.style.height = "109px";
      const marker = new ZTMAP.HtmlMarker(
        el,
        [121.01101297650985, 31.451105926705637],
        { draggable: false }
      );
      marker.addTo(map);

      let data = [
        [121.00516890401582, 31.454178277327273],
        [121.00551330192042, 31.44937895298925],
        [121.009046841557, 31.44916360096596],
        [121.01102564322059, 31.449028127391088],
        [121.01673244848246, 31.44871180127251],
        [121.01642811498232, 31.4528380113113],
        [121.0162815132935, 31.453044682237945],
        [121.01580754342342, 31.45314764060916],
        [121.01437585682447, 31.45330046545351],
        [121.01420703165576, 31.453348360165023],
        [121.01131035908338, 31.453664529116892],
        [121.00960884012437, 31.45383251783103],
        [121.00647742630213, 31.45413048817487],
        [121.00591212837458, 31.454143418972464],
        [121.00516890401582, 31.454178277327273]
      ];
      const geojsonLineString = ZTMAP.GeoJSON.generateLineString(data);
      const lineStringLayer = new ZTMAP.Layer(
        geojsonLineString,
        {},
        {
          "line-color": "#009de2",
          "line-width": 4
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

<style lang="scss">
html,
body {
  width: 1618px;
  height: 1042px;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;

  #map {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
