<template>
  <div class="login_container">
    <el-row :gutter="0">
      <el-col :span="12" :offset="0" :xs="0"></el-col>
      <el-col class="form_container" :span="12" :offset="0" :xs="24">
        <el-form :model="userform" ref="form">
          <h1>Login</h1>
          <el-form-item label="">
            <el-input
              v-model="userform.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="userform.password"
              type="password"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
// reactive
import { reactive, ref } from "vue";
// element-plus/icons-vue
import { User, Lock } from "@element-plus/icons-vue";
// Type when use axios
import type { loginForm } from "@/api/user/type";
// Pinia's store useUserStore
import useUserStore from "@/store/modules/user";
// An element-plus prompt box
import { ElNotification } from "element-plus";
// vue-router
import { useRouter } from "vue-router";
// A loading effect of a button
const loading = ref(false);
// vue-router
const $router = useRouter();
// Pinia store
const useStore = useUserStore();
// Reactive data for login
const userform = reactive<loginForm>({
  username: <string>"admin",
  password: <string>"111111",
});
// login method
const login = async () => {
  // loading animatiion start
  loading.value = true;
  try {
    await useStore.userLogin(userform);
    $router.push("/");
    ElNotification({
      type: "success",
      message: "Login Success",
    });
    // loading animation end
    loading.value = false;
    // catch Error from "await useStore.userLogin(userform)"
  } catch (error) {
    console.log((error as Error).message);
    // get Error meesage
    const message = (error as Error).message;
    // Error prompt
    ElNotification({
      type: "error",
      message,
    });
    loading.value = false;
  }
};
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: calc(100vh - 0px);
  min-height: 520px;
  min-width: 768px;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  .form_container {
    width: 100%;
    height: calc(100vh - 0px);
    min-height: 540px;
    @apply flex justify-center items-center;
    .el-form {
      width: 500px;
      height: 360px;
      @apply flex flex-col justify-center items-center;
      background: url("@/assets/images/login_form.png");
      h1 {
        @apply m-10 text-light-50;
      }
      .el-input,
      .el-button {
        width: 300px;
      }
    }
  }
}
</style>
