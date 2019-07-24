<template>
  <div id="app">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {},
  data() {
    return {
      scene: ""
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

  #map {
    width: 100%;
    height: 100%;
  }
}
</style>
