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
    },
    {
      path: "/",
      name: "404",
      component: () => import("@/components/404.vue")
    }
  ]
});
export default router;
