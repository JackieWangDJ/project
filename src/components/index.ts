import SvgIcon from "./SvgIcon/index.vue";
import Pagination from "./Pagination/index.vue";
import { App, Component } from "vue";
const allGlobalComponents: Component = {
  SvgIcon,
  Pagination,
};
export default {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
  },
};
