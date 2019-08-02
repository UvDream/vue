<template>
  <div id="app">
    <router-view></router-view>
  </div>
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
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
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
}
#map {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
