import { createWebHistory, createRouter, RouteRecordRaw  } from "vue-router";
import { useStore, Store } from "vuex"
import { setToken } from "../utils/token"

const store: Store<any> = useStore()
const routes: RouteRecordRaw[] = [
  // front office routes
  {
    path: "/",
    name: "Front office - formations",
    component: () => import("../views/FOCourseList.vue"),
  },
  {
    path: "/fo/:id",
    name: "formation",
    props: true,
    component: () => import("../views/FOCourseDetails.vue"),
  },
  {
    path: "/fo/:id/register",
    name: "Inscription",
    props: true,
    component: () => import("../views/FORegister.vue"),
  },
  // admin routes
  {
    path: "/admin/managers",
    name: "Intervants",
    component: () => import("../views/ManagerDashboard.vue"),
    meta: { requiresAuth: true, inMenu: true, icon: 'mdi-view-list' },
  },
  {
    path: "/admin",
    alias: "/admin/courses",
    name: "Formations",
    component: () => import("../views/CourseList.vue"),
    meta: { requiresAuth: true, inMenu: true, icon: 'mdi-view-list' },
  },
  {
    path: "/admin/courses/add",
    name: "Ajouter une formation",
    component: () => import("../views/CourseAdd.vue"),
    meta: { requiresAuth: true, inMenu: true, icon: 'mdi-view-list' },
  },
  {
    path: "/admin/courses/:id",
    props: true,
    name: "add",
    component: () => import("../components/CourseDetails.vue"),
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import("../views/VLogin.vue"),
  },
  {
    path: '/admin/logout',
    name: 'Logout',
    redirect: to => {
      setToken('')
      store.dispatch('auth/logout')
      return { path: '/admin' }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue"),
  },
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
