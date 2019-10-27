<template>
  <div id="app">
    <div id="map" @click="mapClick($event)"></div>
    <div class="top-left"></div>
    <div class="top-right"></div>
    <div class="bottom">
      <div>
        <div>
          <video src></video>
          <video src></video>
        </div>
        <div>
          <video src></video>
          <video src></video>
        </div>
      </div>
    </div>
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
import * as ZTMAP from "ztmap";
import { getBayonetPoints } from "@/data/map";
import { handleMarkerDisplay, generateMarker } from "../../utils/map-utils";
import { request } from "@/data/api";

export default {
  data() {
    return {
      checkAll: true,
      checked: [],
      options: [],
      isIndeterminate: false
    };
  },
  methods: {
    //   地图上点 点击事件
    mapClick(e) {
      console.log(e.target.innerHTML);
      request({ url: "hikvision/getVideo" }).then(res => {
        console.log(res);
      });
    },
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
      this.options = ["一类卡口", "三类卡口", "无类卡口"];
      this.checked = ["一类卡口", "三类卡口", "无类卡口"];
      center = [109.96808724375944, 31.37799640955572];
      zoom = 12.806063001017806;
    } else {
      if (name) {
        zoom = 13.2;
      } else {
        center = [120.96669037868332, 31.414776697732762];
        zoom = 11.5;
      }
      this.options = ["一类卡口", "三类卡口", "无类卡口"];
      this.checked = ["一类卡口", "三类卡口", "无类卡口"];
    }
    getBayonetPoints({ type, name }).then(result => {
      const data = result.data;
      const map = new ZTMAP.Map({
        container: "map",
        center: center ? center : data.center,
        zoom: zoom,
        pitch: name ? 50 : 0
      });
      map.on("load", () => {
        // map.addDebugControl();
        data.map(val => {
          val.to = true;
          generateMarker(this.$router, val).addTo(map);
          let el = document.createElement("div");
          el.className = `marker-detail marker-${val.type}`;
          el.style.zIndex = "1";
          new ZTMAP.HtmlMarker(el, val.latlng, { draggable: false }).addTo(map);
        });
      });
    });

    // generateMarker(this.$router, {
    //   type: "special",
    //   latlng: [121.0112746623, 31.4802199136]
    // }).addTo(map);
  }
};
</script>
<style lang="scss">
#map {
  width: 100%;
  // height: 60%;
  height: 100%;
}
#app {
  position: relative;
  .top-left {
    width: 400px;
    height: 400px;
    z-index: 999;
    top: 178px;
    left: 20px;
    position: absolute;
    background: rgba(13, 93, 152, 0.5);
    border: 4px solid #0d5d98;
  }
  .top-right {
    background: rgba(13, 93, 152, 0.5);
    border: 4px solid #0d5d98;
    width: 400px;
    height: 400px;
    top: 178px;
    right: 20px;
    position: absolute;
  }
  .bottom {
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(13, 93, 152, 0.1);
    & > div {
      height: 100%;
      outline: 1px solid orange;
      & > div {
        margin: 0 auto;
        outline: 1px solid red;
        width: 1000px;
        height: 50%;
        display: flex;
        & > video {
          width: 100%;
          height: 100%;
          outline: 1px solid green;
        }
      }
    }
  }
}
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
