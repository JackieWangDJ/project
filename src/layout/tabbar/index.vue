<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <div
        @click="handleCollapseChange"
        class="animate-collapse animated animate-collapse"
      >
        <el-icon v-if="userStore.isCollapse" class="tabbar-collapse-icon"
          ><Expand
        /></el-icon>
        <el-icon v-else class="tabbar-collapse-icon"><Fold /></el-icon>
      </div>
      <div class="breadcrump">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>{{ route.path.slice(1) }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tabbar_right">
      <el-avatar :size="35" :src="defaultAvatar" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import collapse images
import { Expand, Fold } from "@element-plus/icons-vue";
import useUserStore from "@/store/modules/user";
// import { ref, computed } from "vue";
import { useRoute } from "vue-router";
// set default avatar
import defaultAvatar from "@/assets/default-avatar.png";

const route = useRoute();

const userStore = useUserStore();

const handleCollapseChange = () => {
  userStore.isCollapse = !userStore.isCollapse;
  console.log(userStore.isCollapse);
};
</script>
<style scoped lang="scss">
.tabbar {
  @apply flex items-center justify-between;
  width: 100%;
  height: $base-top-tabbar-height;
  padding: 0 10px;
  .tabbar_left {
    @apply flex items-center justify-center;
  }
}
.tabbar-collapse-icon {
  width: 30px;
  height: 30px;
}
.animate-collapse {
}
</style>
