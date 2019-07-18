<template>
  <div id="app">
    <el-aside></el-aside>
    <section>
      <el-header></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </section>
  </div>
</template>

<script>
import axios from "./data/api_async";

export default {
  name: "app",
  components: {},
  methods: {
    initPage() {
      axios.request("hello");
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },
  mounted() {
    let _this = this;
    _this.initPage();
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
  display: flex;

  aside {
    height: 100%;
    border-right: solid 1px #e6e6e6;
  }

  section {
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;

    header {
      background-color: aqua;
    }

    main {
      height: calc(100% - 120px);
      background-color: aliceblue;

      & > div {
        width: 100%;
        height: 100%;
      }
    }

    footer {
      background-color: azure;
    }
  }
}
</style>
