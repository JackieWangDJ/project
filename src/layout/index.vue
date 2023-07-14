<template>
  <div class="layout-container">
    <el-container>
      <!-- left menu -->
      <el-aside
        >
        <Logo />
      </el-aside>
      <el-container>
        <!-- header tabbar -->
        <el-header>Header</el-header>
        <!-- main -->
        <el-main>
          <el-scrollbar> Main </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Logo from "./logo/index.vue";
</script>

<style scoped lang="scss">
// container style
.layout-container {
  width: 100%;
  height: 100vh;
  background-color: $base-container-background;
  // left menu style
  .el-aside {
    width: $base-left-menu-width;
    background-color: $base-left-menu-background;
    height: 100vh;
  }
  // main style
  .el-main {
    height: calc(100vh - $base-top-tabbar-height);
    overflow-y: auto;
    background-color: $base-main-background;
  }
  // header style
  .el-header {
    padding: 0;
    background-color: $base-top-tabbar-background;
    height: $base-top-tabbar-height;
  }
}
</style>
