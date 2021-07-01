import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { useStore } from "vuex"
// import Login from "../components/Login"

const store = useStore()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/list",
    name: "list",
    component: () => import("../components/List.vue"),
    meta: { requiresAuth: true, inMenu: true, icon: 'mdi-view-list' },
  },
  {
    path: "/read/:id",
    name: "read",
    component: () => import("../components/Read.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/Add.vue"),
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login,
  // },
  // {
  //   path: '/logout',
  //   name: 'Logout',
  //   beforeEnter: (to, from, next) => {
  //     setToken('')
  //     store.dispatch('auth/logout')
  //     next({
  //       path: '/login',
  //     })
  //   },
  // },
  // {
  //   path: '/logout',
  //   name: 'Logout',
  //   component: Logout,
  // },
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if ((await store.getters['auth/isLogged']) || (await loginHelper())) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    }
  } else {
    next()
  }
})
*/

export default router;
