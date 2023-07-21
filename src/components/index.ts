import SvgIcon from "./SvgIcon/index.vue";
import Pagination from "./Pagination/index.vue";
import { App, Component } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const allGlobalComponents: Component = {
  SvgIcon,
  Pagination,
};
export default {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
    // Register all ICONs for ElementPlusIconsVue as global components
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
