import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);

export default router;
