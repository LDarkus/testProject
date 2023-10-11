import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("./views/LoginForm"),

    },
    {
        path: "/registration",
        name: "registration",
        component: () => import("./views/RegistrationForm"),
    },
    {
        path: "/personalAccount",
        name: "personalAccount",
        component: () => import("./views/PersonalAccountForm"),
    },
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "/PersonalAccountForm",
    // },
    ],
});

router.beforeEach((to, from, next) => {
  const accesstToken = localStorage.getItem("x-xsrf-token");
  if (!accesstToken) {
    if (to.name === "login" || to.name === "registration") {
      return next();
    }
    else{
      return next("/login");
    }
  }
  if (to.name === "login" || to.name === "registration" && accesstToken) {
    return next("/personalAccount");
  }
  return next();
})

// router.beforeEach((to, from, next) => {
//   const accesstToken = localStorage.getItem("access_token");

//   if (!accesstToken) {
//     if (to.name === "login") {
//       return next();
//     }
//   }
//   if (to.name === "login" && accesstToken) {
//     return next(from);
//   }
//   return next();
// });

export default router;
