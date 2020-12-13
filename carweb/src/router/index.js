import Vue from "vue";
import VueRouter from "vue-router";
import IndexPage from "../components/pages/IndexPage.vue";
import AdminPage from "../components/pages/AdminPage.vue";
import DetailPage from "../components/pages/DetailPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: IndexPage
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: DetailPage
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
