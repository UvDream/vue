import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import ZhouShi from "./views/ZhouShi";
import School from "./views/School";
import Community from "./views/Community";
import Factory from "./views/Factory";

Vue.use(Router);
const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/zhoushi",
      component: ZhouShi,
      name: "zhoushi"
    },
    {
      path: "/school",
      component: School,
      name: "school"
    },
    {
      path: "/community",
      component: Community,
      name: "community"
    },
    {
      path: "/factory",
      component: Factory,
      name: "factory"
    }
  ]
});
export default router;
