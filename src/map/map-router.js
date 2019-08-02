import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      name: "home"
    },
    {
      path: "/zhoushi",
      component: () => import("./views/ZhouShi.vue"),
      name: "zhoushi"
    },
    {
      path: "/school",
      component: () => import("./views/School.vue"),
      name: "school"
    },
    {
      path: "/community",
      component: () => import("./views/Community.vue"),
      name: "community"
    },
    {
      path: "/factory",
      component: () => import("./views/Factory.vue"),
      name: "factory"
    }
  ]
});
export default router;
