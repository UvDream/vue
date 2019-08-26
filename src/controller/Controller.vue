<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="8" :offset="1">周市再生资源综合利用项目大屏</el-col>
        <el-col :span="10">
          <el-menu
            background-color="transparent"
            active-text-color="#ffd04b"
            text-color="#fff"
            default-active="1"
            mode="horizontal"
            @select="handleChange"
          >
            <el-menu-item index="1">首页大屏</el-menu-item>
            <el-menu-item index="2">小区大屏</el-menu-item>
            <el-menu-item index="3">学校大屏</el-menu-item>
            <el-menu-item index="4">企业大屏</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <router-view :ws="ws"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ws: ""
    };
  },
  methods: {
    handleChange(key) {
      let path;
      switch (key) {
        case "1":
          path = "/";
          break;
        case "2":
          path = "/community";
          break;
        case "3":
          path = "/school";
          break;
        case "4":
          path = "/factory";
          break;
      }
      this.$router.push({ path });
    }
  },
  mounted() {
    this.ws = new WebSocket("ws://50.78.138.52:8089/websocket");
    this.ws.onopen = function() {
      console.log("Connection open ...");
    };
    this.ws.onclose = function() {
      console.log("Connection closed.");
    };
    this.ws.onmessage = function(e) {
      console.log(e.data);
    };
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
}

#app {
  width: 100%;
  height: 100%;
  background: url(./assets/img/bg.png) center center no-repeat;
  color: #fff;

  header {
    height: 60px;
    line-height: 60px;
    border-bottom: solid 1px #e6e6e6;
    font-size: 24px;
  }

  section {
    height: calc(100% - 60px);
    overflow: auto;

    button {
      background: url(./assets/img/btn-bg.png) no-repeat center center;
      background-size: 100% 100%;
      border: 0;
      outline: none;
      margin-left: 20px;
      color: rgb(0, 135, 247);
      height: 38px;
      line-height: 38px;
      padding: 0 20px;
      cursor: pointer;

      &:hover {
        color: #ffd04b;
      }
    }

    .active {
      color: #ffd04b;
    }
  }
}
</style>
