<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import * as ZTMAP from "ztmap";
import { requstConfig } from "@/data/api";

export default {
  methods: {
    initMapParam() {
      let _this = this;
      return new Promise(async resolve => {
        if (!sessionStorage.getItem("cacheConfig")) {
          await requstConfig();
        }
        let isPublished = JSON.parse(sessionStorage.getItem("cacheConfig"))
          .isPublished;
        ZTMAP.MAPSTYLE.MAPURL = isPublished
          ? _this.$store.state.innerMapUrl
          : _this.$store.state.outerMapUrl;
        ZTMAP.MAPSTYLE.MAPFONTSURL =
          location.origin + _this.$store.state.mapFontsUrl;
        ZTMAP.MAPSTYLE.MAPSPRITEURL =
          location.origin + _this.$store.state.mapSpriteUrl;
        ZTMAP.MAPSTYLE.STYLE = ZTMAP.MAPBASICLAYERSTYLE.KAILIDE_DARK;
        resolve();
      });
    }
  },
  mounted() {
    Promise.resolve().then(() => this.initMapParam());
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
  position: absolute;
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

.marker-community,
.marker-town {
  background: url(./assets/images/icon-community.png) no-repeat center center;
  color: rgb(132, 235, 222);
  @include marker;
}

.marker-school {
  background: url(./assets/images/icon-school.png) no-repeat center center;
  color: rgb(32, 162, 245);
  @include marker;
}

.marker-allFactory,
.marker-factory {
  background: url(./assets/images/icon-factory.png) no-repeat center center;
  color: rgb(251, 148, 30);
  @include marker;
}

.marker-special {
  background: url(./assets/images/icon-special.png) no-repeat center center;
  color: rgb(229, 82, 50);
  @include marker;
  line-height: 50px;
}

.marker-4g,
.marker-op {
  background: url(./assets/images/4g.png) no-repeat center center;
  width: 149px;
  @include marker;
  color: rgb(58, 86, 245);
}
.marker-zt,
.marker-tp {
  background: url(./assets/images/zt.png) no-repeat center center;
  width: 149px;
  color: rgb(90, 240, 90);
  @include marker;
}
.marker-mx,
.marker-np {
  background: url(./assets/images/mx.png) no-repeat center center;
  width: 149px;
  color: orange;
  @include marker;
}
.marker-rxkk {
  background: url(./assets/images/rxkk.png) no-repeat center center;
  width: 149px;
  @include marker;
  display: none;
}
.marker-jwq {
  background: url(./assets/images/jwt.png) no-repeat center center;
  width: 149px;
  @include marker;
}
.marker-jq {
  background: url(./assets/images/jq.png) no-repeat center center;
  width: 149px;
  @include marker;
}
.marker-hz {
  background: url(./assets/images/hz.png) no-repeat center center;
  width: 149px;
  @include marker;
}

.marker-camera {
  background: url(./assets/images/camera.png) no-repeat center center;
  color: rgba(218, 116, 52, 1);
  @include marker;
}

.el-checkbox {
  color: #fff;
}

.mapboxgl-popup {
  max-width: 2900px !important;
}

.mapboxgl-popup-content {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
