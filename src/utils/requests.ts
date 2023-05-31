// axios 二次封装，主要使用请求和响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
const requests = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截器
requests.interceptors.request.use((config) => {
  config.headers.token = "Admin Token";
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  // 成功回调
  (response) => {
    return response.data;
  },
  // 失败回调：处理 http 网络错误
  (error) => {
    // 错误消息
    let message = "";
    const status = error.request.status;
    switch (status) {
      case 401:
        message = "TOKEN 过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器错误";
        break;
      default:
        message = "网路出现问题";
    }
    ElMessage({
      type: "error",
      message,
    });
  }
);
export default requests;
