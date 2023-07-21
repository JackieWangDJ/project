import requests from "@/utils/requests";
import { loginForm, loginResponseData, userResponseData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
/**
 * Sends a login request to the API.
 * @param data - The login form data.
 * @returns Promise that resolves to the login response data.
 */
// 登录请求接口
export const reqLogin = (data: loginForm) =>
  requests.post<any, loginResponseData>(API.LOGIN_URL, data);
// 用户信息接口
export const reqUserInfo = () =>
  requests.get<any, userResponseData>(API.USERINFO_URL);
