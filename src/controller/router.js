import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: "controller",
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      name: "home"
    },
    {
      path: "/community",
      component: () => import("./views/Community.vue"),
      name: "community"
    },
    {
      path: "/school",
      component: () => import("./views/School.vue"),
      name: "school"
    },
    {
      path: "/factory",
      component: () => import("./views/Factory.vue"),
      name: "factory"
    }
  ]
});
export default router;
