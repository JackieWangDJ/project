<template>
  <!-- <el-menu mode="vertical" default-active="" @select=""> -->
  <template v-for="submenus in menuList" :key="submenus.path">
    <template v-if="!submenus.children">
      <!-- No Submenu -->
      <el-menu-item
        :index="submenus.path"
        :key="submenus.path"
        v-if="!submenus.meta.hidden"
      >
        <el-icon>
          <component :is="submenus.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ submenus.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- There is a submenu -->
    <template v-if="submenus.children && submenus.children.length == 1">
      <el-menu-item
        v-if="!submenus.children[0].meta.hidden"
        :index="submenus.path"
        :key="submenus.path"
      >
        <el-icon>
          <component :is="submenus.children[0].meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ submenus.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <el-sub-menu
      v-if="submenus.children && submenus.children.length > 1"
      :index="submenus.path"
      :key="submenus.path"
    >
      <template #title>
        <el-icon>
          <component :is="submenus.meta.icon" />
        </el-icon>
        <span>{{ submenus.meta.title }}</span>
      </template>
      <!-- Multilevel menu -->
      <!-- We miget have multilevel menus, and wo don't do a for loop, but we can do a recursive menu -->
      <!-- Loop self -->
      <Menu class="el-menu" :menuList="submenus.children"></Menu>
    </el-sub-menu>

    <!-- There are multiple submenus -->
  </template>
  <!-- </el-menu> -->
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
