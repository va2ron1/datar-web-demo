import Vue from "vue";
import Router from "vue-router";
import Menu from "./views/Menu.vue";
import Search from "./views/Search.vue";
import Submit from "./views/Submit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "menu",
      component: Menu
    },
    {
      path: "/submit",
      name: "submit",
      component: Submit
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
});
