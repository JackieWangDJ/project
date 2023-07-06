// user 相关的类型

// 登录请求数据类型
export interface loginForm {
  username: string;
  password: string;
}
// 登录返回数据类型
export interface loginResponseData {
  code: number;
  data: dataType;
}
// 登录返回数据类型的data数据类型
interface dataType {
  token?: string;
  message?: string;
}
// 获取用户新信息返回的数据类型
export interface userResponseData {
  code: number;
  data: user;
}
// 获取用户新信息返回的数据类型中的data数据类型
interface user {
  checkUser: userInfo;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
