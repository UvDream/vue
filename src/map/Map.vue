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
@mixin marker {
  height: 109px;
  line-height: 35px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}

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

.marker-community {
  background: url(./assets/images/icon-community.png) no-repeat center center;
  color: rgb(132, 235, 222);
  @include marker;
}

.marker-school {
  background: url(./assets/images/icon-school.png) no-repeat center center;
  color: rgb(32, 162, 245);
  @include marker;
}

.marker-factory {
  background: url(./assets/images/icon-factory.png) no-repeat center center;
  color: rgb(132, 235, 222);
  @include marker;
}

.marker-special {
  background: url(./assets/images/icon-special.png) no-repeat center center;
  color: rgb(229, 82, 50);
  @include marker;
  line-height: 50px;
}

.marker-town {
  background: url(./assets/images/icon-town.png) no-repeat center center;
  color: rgb(98, 98, 240);
  @include marker;
}
</style>
