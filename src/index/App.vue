<template>
  <div id="app">
    <button @click="controllerBtn">控制屏</button>
    <button @click="mapBtn">地图</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    controllerBtn() {
      location.href = "controller";
    },
    mapBtn() {
      location.href = "map";
    }
  }
};
</script>
