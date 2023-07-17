<template>
  <el-menu mode="vertical" default-active="" @select="">
    <template v-for="submenus in menuList" :key="submenus.path">
      <!-- No Submenu -->
      <el-menu-item
        v-if="!submenus.children"
        :index="submenus.path"
        :key="submenus.path"
      >
        <template #title>{{ submenus.meta.title }}</template>
      </el-menu-item>
      <!-- There is a submenu -->
      <el-menu-item
        v-if="submenus.children && submenus.children.length == 1"
        :index="submenus.path"
        :key="submenus.path"
      >
        <template #title>{{ submenus.meta.title }}</template>
      </el-menu-item>
      <!-- There are multiple submenus -->
      <el-sub-menu
        v-if="submenus.children && submenus.children.length > 1"
        :index="submenus.path"
        :key="submenus.path"
      >
        <template #title>
          <div class="submenus-meta-title">{{ submenus.meta.title }}</div>
        </template>
        <!-- Multilevel menu -->
        <!-- We miget have multilevel menus, and wo don't do a for loop, but we can do a recursive menu -->
        <!-- Loop self -->
        <Menu class="el-menu" :menuList="submenus.children"></Menu>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
// get menu list
defineProps(["menuList"]);
// export component name
defineOptions({
  name: "Menu",
});
</script>
<style scoped lang="scss">
// .el-menu {
//   background-color: #95a5a6;
//   color: $base-left-menu-logo-text-color;
//   .el-menu-item,
//   .el-sub-menu {
//     color: $base-left-menu-logo-text-color;
//   }
//   .submenus-meta-title {
//     color: $base-left-menu-logo-text-color;
//   }
//   :deep(.el-sub-menu__icon-arrow) {
//     color: $base-left-menu-logo-text-color;
//   }
// }
</style>
