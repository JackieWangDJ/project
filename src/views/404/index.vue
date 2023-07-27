<template>
  <div class="container">
    <el-empty description="There's nothing here" />
    <el-button type="default" size="default" @click="handleClick"
      >Back to Home</el-button
    >
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = () => {
  router.push({
    name: "layout",
  });
};
</script>
<style scoped>
.container {
  @apply flex justify-center items-center flex-col;
  width: 100%;
  height: 100vh;
}
</style>
