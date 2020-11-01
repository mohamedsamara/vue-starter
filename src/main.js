import "core-js";
import "regenerator-runtime/runtime";
import Vue from "vue";

import vuetify from "./plugins/vuetify";
import router from "./router";
import App from "./App";

new Vue({
  vuetify,
  router,
  el: "#app",
  render: (h) => h(App),
});
