<template>
  <div id="app">
    <div id="map" @click="mapClick($event)"></div>
    <div class="top-left">
      <div class="block">
        <div>卡口名称</div>
        <div>{{list.leftData.kname}}</div>
      </div>
      <div class="block">
        <div>卡口等级</div>
        <div>{{list.leftData.kgrade}}</div>
      </div>
      <div class="block">
        <div>主管单位</div>
        <div>{{list.leftData.organizer}}</div>
      </div>
      <div class="block">
        <div>日均双向车流量</div>
        <div>{{list.leftData.trafficFlow}}</div>
      </div>
      <div class="block">
        <div>位置描述</div>
        <div>{{list.leftData.position}}</div>
      </div>
      <div class="block">
        <div>负责人姓名</div>
        <div>{{list.leftData.principalName}}</div>
      </div>
      <div class="block">
        <div>负责人电话</div>
        <div>{{list.leftData.principalPhone}}</div>
      </div>
    </div>
    <div class="top-right">
      <div class="block">
        <div>每排警力</div>
        <div>{{list.rightData.policeForce}}</div>
      </div>
      <div class="zb">装备情况</div>
      <div class="block">
        <div>枪支</div>
        <div>{{list.rightData.firearms}}</div>
      </div>
      <div class="block">
        <div>一键点调</div>
        <div>{{list.rightData.oneClickAdjustment}}</div>
      </div>
      <div class="block">
        <div>执法仪</div>
        <div>{{list.rightData.lawEnforcementInstrument}}</div>
      </div>
      <div class="block">
        <div>检车位</div>
        <div>{{list.rightData.checkParkingSpace}}</div>
      </div>
      <div class="block">
        <div>电台</div>
        <div>{{list.rightData.radio}}</div>
      </div>
      <div class="block">
        <div>警务通</div>
        <div>{{list.rightData.policeService}}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-video">
        <div>{{list.video1.name}}</div>
        <section>
          <video autoplay="autoplay" :src="list.video1.url"></video>
        </section>
      </div>
      <div class="bottom-video">
        <div>{{list.video2.name}}</div>
        <section>
          <video autoplay="autoplay" :src="list.video2.url"></video>
        </section>
      </div>
      <div class="bottom-video">
        <div>{{list.video3.name}}</div>
        <section>
          <video autoplay="autoplay" :src="list.video3.url"></video>
        </section>
      </div>
      <div class="bottom-video">
        <div>{{list.video4.name}}</div>
        <section>
          <video autoplay="autoplay" :src="list.video4.url"></video>
        </section>
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
      isIndeterminate: false,
      data: "",
      list: {
        leftData: {
          kname: "",
          kgrade: "",
          organizer: "",
          trafficFlow: "",
          position: "",
          principalName: "",
          principalPhone: ""
        },
        rightData: {
          policeForce: "",
          firearms: "",
          oneClickAdjustment: "",
          lawEnforcementInstrument: "",
          checkParkingSpace: "",
          radio: "",
          policeService: ""
        },
        video1: {
          name: "这是名字",
          url: ""
        },
        video2: {
          name: "2",
          url: ""
        },
        video3: {
          name: "3",
          url: ""
        },
        video4: {
          name: "4",
          url: ""
        }
      }
    };
  },
  methods: {
    //   地图上点 点击事件
    mapClick(e) {
      this.searchMap(e.target.innerHTML);
    },
    searchMap(name) {
      request({ url: "hikvision/getVideo", data: { name } }).then(res => {
        console.log(res);
        this.list = res.data;
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
        zoom = 10.5;
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
.zb {
  color: #fff;
  margin: 0 20px;
  background-image: url("../assets/images/zb.png");
  height: 65px;
  background-size: 100% 100%;
  line-height: 50px;
  padding-left: 80px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.block {
  display: flex;
  width: 100%;
  //   outline: 1px solid red;
  height: 85px;
  color: #fff;
  margin-top: 10px;
  padding: 0 20px;
  & > div:nth-child(1) {
    background-image: url("../assets/images/alert-b1.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 42%;
    margin-right: 20px;
  }
  & > div:nth-child(2) {
    background-image: url("../assets/images/alert-b2.png");
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 100% 100%;
    width: 50%;
  }
}
#map {
  width: 100%;
  height: 70%;
  //   height: 100%;
}
#app {
  position: relative;
  .top-left {
    width: 800px;
    height: 680px;
    z-index: 999;
    top: 178px;
    left: 20px;
    position: absolute;
    border: 4px solid #0d5d98;
    background-image: url("../assets/images/alert1.png");
    background-size: 100% 100%;
    padding: 50px 20px;
  }
  .top-right {
    background: rgba(13, 93, 152, 0.5);
    border: 4px solid #0d5d98;
    z-index: 900;
    width: 800px;
    height: 780px;
    top: 178px;
    background-image: url("../assets/images/alert1.png");
    background-size: 100% 100%;
    right: 20px;
    position: absolute;
    padding: 50px 20px;
    .block {
      & > div:nth-child(1) {
        height: 80px;
        background-image: url("../assets/images/bc.png");
      }
    }
  }
  .bottom {
    width: 100%;
    height: 30%;
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    background-color: rgba(13, 93, 152, 1);
    &-video {
      width: 25%;
      height: 92%;
      margin: 15px 10px;
      background: url("../assets/images/video.png") no-repeat center center;
      background-size: 100% 100%;
      & > div {
        color: #fff;
        padding-left: 20px;
        height: 10%;
        padding-top: 2%;
      }
      & > section {
        width: 98%;
        margin: 15px auto;
        height: 80%;
        & > video {
          width: 100%;
          height: 100%;
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
