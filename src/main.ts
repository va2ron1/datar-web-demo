import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapVue from "bootstrap-vue";
const VueFeather = require("vue-feather");

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueFeather);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker'

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
