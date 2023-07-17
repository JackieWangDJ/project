export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: { title: "Login" },
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: { title: "Layout" },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "Home" },
      },
      {
        path: "/home2",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "Home2" },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: { title: "404" },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: { title: "Any" },
  },
];
