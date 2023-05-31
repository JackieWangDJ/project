import requests from "@/utils/requests";
import { loginForm, loginResponseData, userResponseData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
// 登录请求接口
export const reqLogin = (data: loginForm) =>
  requests.post<any, loginResponseData>(API.LOGIN_URL, data);
// 用户信息接口
export const reqUserInfo = () =>
  requests.get<any, userResponseData>(API.USERINFO_URL);
