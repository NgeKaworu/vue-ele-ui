import Vue from "vue";
import Vuex from "vuex";
import loading from "./plugins/loading";
import global from "./global";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    template: {
      state: {},
      mutations: {},
      actions: {}
    },
    global
  },
  plugins: [loading],
  strict: debug
});
