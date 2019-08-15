import Vue from "vue";
import App from "./Map.vue";
import "./assets/style/ztmap.css";
import store from "./map-store";
import router from "./map-router";
import { Checkbox, CheckboxGroup } from "element-ui";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
