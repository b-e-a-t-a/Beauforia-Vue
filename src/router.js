import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cennik",
      name: "pricelist",
      component: () =>
        import(/* webpackChunkName: "pricelist" */ "./views/Pricelist.vue")
    },
    {
      path: "/galeria",
      name: "gallery",
      component: () => import("./views/Gallery.vue")
    },
    {
      path: "/kontakt",
      name: "contact",
      component: () => import("./views/Contact.vue")
    }
  ]
});
