import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  options: {
    customProperties: true,
  },
  iconfont: "md",
};

export default new Vuetify(opts);
