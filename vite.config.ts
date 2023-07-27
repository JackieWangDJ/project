import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";
import path from "path";
import WindiCSS from "vite-plugin-windicss";
// 引入 svg 图标插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      WindiCSS(),
      viteMockServe({
        localEnabled: command === "serve", // 开发阶段可以使用 mock 接口
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    base: "/",
    server: {
      port: 8080,
    },
  };
};
// export default defineConfig({
//   plugins: [
//     vue(),
//     createSvgIconsPlugin({
//       iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
//       symbolId: "icon-[dir]-[name]",
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
//     },
//   },
//   // scss全局变量的配置
//   css: {
//     preprocessorOptions: {
//       scss: {
//         javascriptEnabled: true,
//         additionalData: '@import "./src/styles/variable.scss";',
//       }
//     }
//   }
// });
