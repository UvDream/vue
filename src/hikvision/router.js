import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: "hikvision",
  routes: [
    {
      path: "/",
      name: "home"
    }
  ]
});
export default router;
