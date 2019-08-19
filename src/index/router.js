import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/"
    },
    {
      path: "/about",
      component: () => import("../components/404.vue")
    },
    {
      path: "*",
      component: () => import("../components/404.vue")
    }
  ]
});

export default router;
