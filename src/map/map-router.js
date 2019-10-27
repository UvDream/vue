import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: "map",
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      name: "home"
    },
    {
      path: "/city",
      component: () => import("./views/City.vue"),
      name: "city"
    },
    {
      path: "/detail",
      component: () => import("./views/Detail.vue"),
      name: "detail"
    },
    {
      path: "/police",
      component: () => import("./views/Police.vue"),
      name: "police"
    },
    {
      path: "/bayonet",
      component: () => import("./views/Bayonet.vue"),
      name: "bayonet"
    },
    {
      path: "*",
      component: () => import("../components/404.vue")
    }
  ]
});
export default router;
