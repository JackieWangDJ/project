import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "@/router/routes";
import { ElNotification } from "element-plus";
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
router.beforeEach((to, from, next) => {
  const token = JSON.parse(localStorage.getItem("TOKEN") as string);

  if (!token && to.name !== "login") {
    ElNotification({
      type: "error",
      title: "Please login first!",
    });
    next({ name: "login" });
    return;
  }

  if (to.name == "login" && !token) {
    next();
    return;
  }

  if (to.name == "login" && token) {
    ElNotification({
      type: "error",
      title: "Repeated login!",
    });
    next({ path: from.path });
    return;
  }
  next();
});

export default router;
