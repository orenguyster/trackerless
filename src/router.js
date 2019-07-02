import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Campaigns from "./views/Campaigns.vue";
import Apps from "./views/Apps.vue";
import Settings from "./views/Settings.vue";
//import Campaigns from "./views/Campaigns.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/campaigns",
      name: "Campaigns",
      component: Campaigns
    },
    {
      path: "/apps",
      name: "Apps",
      component: Apps
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/campaigns",
      name: "Campaigns",
      component: Campaigns
    }
  ]
});
