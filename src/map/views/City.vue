<template>
  <div id="app">
    <div id="map"></div>
    <div class="control-panel">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >
        全选
      </el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checked" @change="handleCheckedChange">
        <el-checkbox v-for="option in options" :label="option" :key="option">{{option}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/checkbox.css";
import "element-ui/lib/theme-chalk/checkbox-group.css";
import { generateMarker, handleMarkerDisplay } from "../../utils/map-utils";
import * as ZTMAP from "ztmap";
import { getBounds, getPoints } from "../../data/map";

const options = ["学校", "小区", "企业"];

export default {
  data() {
    return {
      checkAll: true,
      checked: ["学校", "小区", "企业"],
      options: options,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checked = val ? options : [];
      this.isIndeterminate = false;
      handleMarkerDisplay(this.checked);
    },
    handleCheckedChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
      handleMarkerDisplay(this.checked);
    }
  },
  mounted() {
    const map = new ZTMAP.Map({
      container: "map",
      center: [120.99444786781726, 31.448474728362854],
      zoom: 13.3,
      pitch: 50
    });
    map.on("load", () => {
      getPoints().then(result => {
        let data = result.data.data;
        data.map(val => {
          generateMarker(val).addTo(map);
        });
      });

      getBounds().then(result => {
        let boundsData = result.data.data;
        const geoLineString = ZTMAP.GeoJSON.generateLineString(boundsData);
        const lineStringLayer = new ZTMAP.Layer(
          geoLineString,
          {},
          {
            "line-color": "#3bb2d0",
            "line-width": 8
          }
        );
        lineStringLayer.addTo(map);
      });

      generateMarker({
        type: "special",
        name: "周市再生资源综合利用项目",
        latlng: [121.0112746623, 31.4802199136]
      }).addTo(map);
    });
  }
};
</script>

<style lang="scss" scoped>
.control-panel {
  position: absolute;
  width: 240px;
  height: 80px;
  background: rgba(13, 93, 152, 0.5);
  top: 20px;
  left: 20px;
  padding: 20px;
  border: 4px solid rgb(13, 93, 152);
}
</style>
