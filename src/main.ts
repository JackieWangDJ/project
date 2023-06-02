import { createApp } from "vue";
import App from "@/App.vue";
// 引用 element-plus 插件和样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// element-plus 的国际化，暂时忽略这个
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// SVG 配置代码
import "virtual:svg-icons-register";

// 安装自定义插件，作用：注册全局组件
import allGlobalComponent from "@/components";

// 引入全局样式
import "@/styles/index.scss";
// 引入路由
import router from "@/router";

const app = createApp(App);

// 安装 Element Plus 插件
app.use(ElementPlus, {
  locale: zhCn,
});

// 自定义插件
app.use(allGlobalComponent);
// 使用路由
app.use(router);

app.mount("#app");
