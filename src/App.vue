<template>
  <div>
    <h1 @click="handle">456</h1>
  </div>
</template>
<script setup lang="ts">
import { reqLogin, reqUserInfo } from "@/api/user";
import { loginResponseData, userResponseData } from "@/api/user/type";
const handle = async () => {
  const res: loginResponseData = await reqLogin({
    username: "admin",
    password: "111111",
  });
  const res1: userResponseData = await reqUserInfo();
  console.log("res:", res.data);
  console.log("res1:", res1.data);
};
</script>
<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
