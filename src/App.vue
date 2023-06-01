<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="0">
      <el-image :src="imgUrl" fit="fill"></el-image>
    </el-col>
    <el-col :span="16" :offset="0">bbb</el-col>
  </el-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
const imgUrl = ref(
  "https://img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg"
);
</script>
<style scoped lang="scss">
.el-image {
  border: 3px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;

  :deep(.el-image__inner) {
    width: 90%;
    border-radius: 10px;
  }
}
</style>
