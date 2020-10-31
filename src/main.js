import "core-js";
import "regenerator-runtime/runtime";
import Vue from "vue";

import router from "./router";
import App from "./App";

new Vue({
  router,
  el: "#app",
  render: (h) => h(App),
});
