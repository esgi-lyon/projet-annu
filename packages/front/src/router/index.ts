import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/list",
    // alias: "/list",
    name: "list",
    component: () => import("../components/List.vue"),
  },
  {
    path: "/read/:id",
    name: "read",
    component: () => import("../components/Read.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/Add.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;