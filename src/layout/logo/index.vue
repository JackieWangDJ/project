<template>
  <!-- home page icon and title start -->
  <div class="container" v-if="!settings.leftAsideHidden">
    <!-- container item -->
    <div class="container-item">
      <!-- icon fill and lazy loading -->
      <el-image :src="iconPath" fit="fill" :lazy="true"></el-image>
      <!-- title -->
      <el-text size="large" v-if="!userStore.isCollapse">{{ settings.leftAsideTitle }}</el-text>
    </div>
  </div>
  <!-- home page icon and title end -->
</template>
<script setup lang="ts">
import { useFile } from "@/utils/getAssetsImages";
import useUserStore from "@/store/modules/user";
import settings from "@/settings";
const userStore = useUserStore();
// import icon from assets
const iconPath = useFile(settings.leftAsideIconPath);
</script>
<style scoped lang="scss">
// container style
.container {
  @apply flex justify-center items-center;
  width: 100%;
  height: $base-left-menu-logo-height;
  // container item style
  .container-item {
    @apply flex justify-center items-center;
    // icon style
    .el-image {
      width: 40px;
      height: 40px;
    }
    // title style
    .el-text {
      color: #ecf0f1;
      margin-left: 10px;
      font-size: $base-left-menu-logo-text-font-size;
    }
  }
}
</style>
