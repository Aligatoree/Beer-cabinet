import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Beer",
    component: function () {
      return import(/* webpackChunkName: "beer" */ "../views/Beer.vue");
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: function () {
      return import(/* webpackChunkName: "profile" */ "../views/Profile.vue");
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("isAuth")) {
      next('/login');
    }
    else {
      next();
    }
  } else {
    next()
  }
});

export default router;
