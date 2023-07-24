import { createApp } from "vue";
import App from "@/App.vue";
// 引用 element-plus 插件和样式
import ElementPlus from "element-plus";
// 引入 element-plus 的全局样式
import "element-plus/dist/index.css";
// 引入windicss
import "virtual:windi.css";
// 引入仓库
import pinia from "@/store";
// element-plus 的国际化，暂时忽略这个
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// SVG 配置代码
import "virtual:svg-icons-register";
// import 'animate.css';
import 'animate.css';
// 安装自定义插件，作用：注册全局组件
import allGlobalComponent from "@/components";

// 引入全局样式
import "@/styles/index.scss";
// 引入路由
import router from "@/router";
// 创建APP
const app = createApp(App);

// 安装 Element Plus 插件
app.use(ElementPlus, {
  // 使用中文
  locale: zhCn,
});

// 自定义插件
app.use(allGlobalComponent);
// 使用路由
app.use(router);
// 使用仓库
app.use(pinia);
// 渲染
app.mount("#app");
