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

export default {
  data() {
    return {
      checkAll: false,
      checked: [],
      options: [],
      isIndeterminate: false
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checked = val ? this.options : [];
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
    let { name = "", type = "" } = this.$route.query;
    let center, zoom;
    if (type) {
      this.options = ["违法警情", "3g摩巡", "4g车", "人像卡口", "火灾"];
      this.checked = ["违法警情", "3g摩巡", "4g车", "火灾"];
      center = [120.96808724375944, 31.37799640955572];
      zoom = 12.806063001017806;
    } else {
      if (name) {
        zoom = 13.2;
      } else {
        center = [120.96669037868332, 31.414776697732762];
        zoom = 11.5;
      }
      this.options = ["警情", "3g摩巡", "4g车", "人像卡口"];
      this.checked = ["警情", "3g摩巡", "4g车"];
    }
    axios.post("/location/getPolicePoints", { type, name }).then(result => {
      // axios.get("/json/map/police/policePoints.json", { name }).then(result => {
      const data = result.data;
      const map = new ZTMAP.Map({
        container: "map",
        center: center ? center : data.center,
        zoom: zoom,
        pitch: name ? 50 : 0
      });
      map.on("load", () => {
        // map.addDebugControl();
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
<style lang="scss">
.control-panel {
  position: absolute;
  width: auto;
  height: auto;
  background: rgba(13, 93, 152, 0.5);
  top: 20px;
  left: 20px;
  padding: 20px 10px;
  border: 4px solid rgb(13, 93, 152);

  .el-checkbox {
    font-size: 30px;
  }

  .el-checkbox__label {
    font-size: 30px;
  }

  .el-checkbox__inner {
    width: 30px;
    height: 30px;
  }

  .el-checkbox__inner::after {
    height: 20px;
    left: 12px;
    top: 2px;
  }

  .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
    top: 13px;
  }
}
</style>
