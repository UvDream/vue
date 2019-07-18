import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import { Container, Header, Main, Aside, Footer } from "element-ui";

Vue.config.productionTip = false;
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
