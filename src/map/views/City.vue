<template>
  <div>
    <div id="map"></div>
    <div class="control-panel">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checked" @change="handleCheckedChange">
        <el-checkbox v-for="option in options" :label="option" :key="option">{{ option }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/checkbox.css";
import "element-ui/lib/theme-chalk/checkbox-group.css";
import {
  generateMarker,
  handleMarkerDisplay,
  genrateHikMarker
} from "../../utils/map-utils";
import * as ZTMAP from "ztmap";
import { getBounds, getPoints } from "../../data/map";
import { request } from "@/data/api";

const options = ["学校", "小区", "企业", "全部企业", "摄像头"];

export default {
  data() {
    return {
      checkAll: true,
      checked: ["学校", "小区", "企业", "摄像头", "全部摄像头"],
      options: options,
      isIndeterminate: false
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checked = val ? options : [];
      this.isIndeterminate = false;
      handleMarkerDisplay(this.checked);
    },
    handleCheckedChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;

      handleMarkerDisplay(this.checked);
    }
  },
  mounted() {
    // 判断是否市区大屏
    let { isUrban = 0 } = this.$route.query;
    let center =
        isUrban == 0
          ? [120.99444786781726, 31.448474728362854]
          : [120.96867907688352, 31.44367759697542],
      zoom = isUrban == 0 ? 13.3 : 15.3;

    const map = new ZTMAP.Map({
      container: "map",
      center,
      zoom,
      pitch: 50
    });
    map.on("load", () => {
      getPoints().then(result => {
        let data = result.data.data;
        data.map(val => {
          generateMarker(this.$router, val).addTo(map);
        });
        Array.from(document.getElementsByClassName("marker-allFactory")).map(
          val => {
            val.style.display = "none";
          }
        );
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

      generateMarker(this.$router, {
        type: "special",
        name: "周市再生资源综合利用项目",
        latlng: [121.0112746623, 31.4802199136]
      }).addTo(map);

      // 海康的地图摄像头点位
      request({ url: "hikvision/getCameraPoints" }).then(result => {
        console.log("摄像头", result);
        result.data.map(val => {
          genrateHikMarker(val, isUrban).addTo(map);
        });
      });
      // 全部摄像头
      request({ url: "hikvision/getAllCameraPoints" }).then(result => {
        console.log("全部摄像头", result);
        result.data.map(val => {
          genrateHikMarker(val, isUrban).addTo(map);
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.control-panel {
  position: absolute;
  background: rgba(13, 93, 152, 0.5);
  top: 20px;
  left: 20px;
  padding: 20px;
  border: 4px solid rgb(13, 93, 152);
}

#app > div {
  height: 100%;
}
</style>
