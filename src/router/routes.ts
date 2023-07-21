export const constantRoutes = [
  // #region Login routers
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: { title: "Login", hidden: true },
  },
  // #endregion

  // #region Root routers
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: { title: "Layout", hidden: false, icon: "House" },
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "Home", hidden: false, icon: "House" },
      },
    ],
  },
  // #endregion

  // #region Data Screen
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: { title: "Data Screen", hidden: false, icon: "Monitor" },
  },
  // #endregion

  // #region Acl
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: { title: "Acl", hidden: false, icon: "Setting" },
    children: [
      {
        path: "/acl/user",
        name: "User",
        component: () => import("@/views/acl/user/index.vue"),
        meta: { title: "User", hidden: false, icon: "User" },
      },
      {
        path: "/acl/role",
        name: "Role",
        component: () => import("@/views/acl/role/index.vue"),
        meta: { title: "Role", hidden: false, icon: "Lock" },
      },
      {
        path: "/acl/permission",
        name: "Permission",
        component: () => import("@/views/acl/permission/index.vue"),
        meta: { title: "Permission", hidden: false, icon: "Aim" },
      },
    ],
  },
  // #endregion

  // #region product management
  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: { title: "Product Mangement", hidden: false, icon: "Goods" },
    children: [
      {
        path: "/product/trademark",
        name: "Trademark",
        component: () => import("@/views/product/trademark/index.vue"),
        meta: { title: "Trademark", hidden: false, icon: "ShoppingCartFull" },
      },
      {
        path: "/product/attr",
        name: "Attr",
        component: () => import("@/views/product/attr/index.vue"),
        meta: { title: "Attribute Management", hidden: false, icon: "Help" },
      },
      {
        path: "/product/spu",
        name: "Spu",
        component: () => import("@/views/product/spu/index.vue"),
        meta: { title: "SPU Management", hidden: false, icon: "Calendar" },
      },
      {
        path: "/product/sku",
        name: "Sku",
        component: () => import("@/views/product/sku/index.vue"),
        meta: { title: "SKU Management", hidden: false, icon: "Box" },
      },
    ],
  },
  // #endregion

  // #region 404
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: { title: "404", hidden: true },
  },
  // #endregion

  // #region Any roters
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: { title: "Any", hidden: true },
  },
  // #endregion
];
