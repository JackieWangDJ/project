<template>
  <div class="layout-container">
    <el-container>
      <!-- left menu -->
      <el-aside :style="{ width: userStore.isCollapse ? '64px' : '260px' }">
        <Logo />
        <el-scrollbar class="left-menu-scrollbar">
          <!-- dynamic menu -->
          <el-menu
            background-color="#485460"
            text-color="#fff"
            router
            :collapse="userStore.isCollapse"
            :default-active="$route.path"
            active-text-color="#ffd04b"
            :collapse-transition="false"
          >
            <Menu :menuList="userStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <!-- header tabbar -->
        <el-header>
          <Tabbar></Tabbar>
        </el-header>
        <!-- main -->
        <el-main>
          <el-scrollbar>
            <Main></Main>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import Main from "./main/index.vue";
import Tabbar from "./tabbar/index.vue";
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
const $route = useRoute();
// const isCollapse = ref(false);
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
    .left-menu-scrollbar {
      height: calc(100vh - $base-left-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
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
    // background-color: $base-top-tabbar-background;
    height: $base-top-tabbar-height;
  }
}
</style>
