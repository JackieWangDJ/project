// import routers type
import type { RouteRecordRaw } from "vue-router";
// user store type
export interface UserState {
  token: string | null | undefined;
  menuRoutes: RouteRecordRaw[];
  isCollapse: boolean;
}
