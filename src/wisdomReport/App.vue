<template>
  <div id="app">
    <svg id="svg" />
    <div id="tooltip"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import * as d3 from "d3";
import * as geo from "d3-geo";
import * as d3Color from "d3-scale-chromatic";

export default {
  name: "app",
  components: {},
  methods: {
    initMap() {
      let _this = this;
      _this.svg = d3
        .select("#svg")
        .attr("width", _this.width)
        .attr("height", _this.height);
      d3.json("../static/china.json").then(data => {
        _this.svg
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("d", _this.path)
          .attr("fill", function(d, i) {
            return _this.colors(i);
          })
          .attr("stroke", "rgba(255, 255, 255, 1")
          .attr("stroke-width", 1);
      });
    }
  },
  data() {
    return {
      width: 1024,
      height: 600,
      projection: "",
      path: "",
      colors: "",
      svg: ""
    };
  },
  mounted() {
    let _this = this;
    _this.projection = geo
      .geoMercator()
      .scale(550)
      .center([105, 38])
      .translate([_this.width / 2, _this.height / 2]);
    _this.path = geo.geoPath(_this.projection);
    _this.colors = d3.scaleOrdinal(d3Color.schemeBrBG[11]);
    _this.initMap();
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
  min-width: 1366px;
  min-height: 768px;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #svg {
    width: 1024px;
    height: 600px;
    margin: 0 auto;
    display: block;
  }
  #tooltip {
    opacity: 0;
    position: absolute;
    padding: 10px;
    background: #333333;
    border: 2px solid #e8e8e8;
    color: #33cc99;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
