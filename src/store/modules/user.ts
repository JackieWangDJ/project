// create user-related repositories
import { reqLogin } from "@/api/user";
import type { loginForm, loginResponseData } from "@/api/user/type";
import { defineStore } from "pinia";
import { UserState } from "./types/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/localStroageUtils";
// create user repositories
let useUserStore = defineStore("User", {
  // Where data is stored
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // Unique identification of the user
    };
  },
  // Where asynchronous requests and logic are handled
  actions: {
    /**
     * Asynchronously logs in a user.
     *
     * @param {loginForm} data - The loginForm data.
     * @return {Promise<string>} A promise that resolves to a success message if the login is successful, or rejects with an error message if the login fails.
     */
    async userLogin(data: loginForm) {
      // login seccuss and fail
      // Gets the content of the response
      const result: loginResponseData = await reqLogin(data);
      // The console outputs the content of the response
      // console.log(result);
      // If the return value is 200
      // login success
      if (result.code == 200) {
        // Store the returned data in a variable token in pinia's state
        // Becauise Pinia storage is a Javascript-based object, it cannot be persisted
        this.token = result.data.token;
        // Therefore,localStorage is also required for persistent storage
        // localStorage.setItem("TOKEN", JSON.stringify(result.data.token));
        SET_TOKEN(result.data.token as string);
        // use Promise to return login success message
        return "Login Success";
      } else {
        // login fail
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});

// export repositories function
export default useUserStore;

    