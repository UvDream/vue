import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: "hikvision",
  routes: [
    {
      path: "/",
      name: "setting",
      component: () => import("./views/Setting.vue")
    }
  ]
});
export default router;
