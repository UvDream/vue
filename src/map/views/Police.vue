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
        <el-checkbox v-for="option in options" :label="option" :key="option">{{
          option
        }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/checkbox.css";
import "element-ui/lib/theme-chalk/checkbox-group.css";
import * as ZTMAP from "ztmap";
import axios from "axios";
import { handleMarkerDisplay } from "../../utils/map-utils";

const options = ["警情", "3g摩巡", "4g车", "人像卡口"];

export default {
  data() {
    return {
      checkAll: false,
      checked: ["警情", "3g摩巡", "4g车"],
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
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
      handleMarkerDisplay(this.checked);
    }
  },
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
          el.className = `marker-detail marker-${val.type}`;
          new ZTMAP.HtmlMarker(el, val.latlng, { draggable: false }).addTo(map);
        });
      });
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
