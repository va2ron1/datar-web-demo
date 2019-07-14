import Vue from "vue";
import Router from "vue-router";
import Menu from "./views/Menu.vue";
import Search from "./views/Search.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "menu",
      component: Menu
    },
    {
      path: "/post",
      name: "post",
      component: Menu
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
});
