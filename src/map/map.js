import Vue from "vue";
import App from "./Map.vue";
import "./assets/style/ztmap.css";
import store from "./map-store";
import router from "./map-router";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
