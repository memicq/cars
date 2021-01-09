import Vue from "vue";
import VueRouter from "vue-router";
import IndexPage from "../components/pages/IndexPage.vue";
import DetailPage from "../components/pages/DetailPage.vue";
import AdminMoviesPage from "../components/pages/AdminMoviesPage.vue";
import AdminTagsPage from "../components/pages/AdminTagsPage.vue";
import AdminReportPage from "../components/pages/AdminReportPage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";

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
    path: "/admin/movies",
    name: "AdminMoviesPage",
    component: AdminMoviesPage
  },
  {
    path: "/admin/tags",
    name: "AdminTagsPage",
    component: AdminTagsPage
  },
  {
    path: "/admin/report",
    name: "AdminReportPage",
    component: AdminReportPage
  },
  {
    path: "/admin*",
    redirect: "/admin/movies"
  },
  {
    path: "*",
    name: "NotFoundPage",
    component: NotFoundPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
