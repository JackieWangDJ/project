<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <div @click="handleCollapseChange" class="animate-collapse">
        <el-icon v-if="userStore.isCollapse" class="tabbar-collapse-icon"
          ><Expand
        /></el-icon>
        <el-icon v-else class="tabbar-collapse-icon"><Fold /></el-icon>
      </div>
      <div class="breadcrump">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>{{route.path.slice(1)}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tabbar_right"><el-avatar :size="35" :src="circleUrl" /></div>
  </div>
</template>
<script setup lang="ts">
import { Expand, Fold } from "@element-plus/icons-vue";
import useUserStore from "@/store/modules/user";
import { ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
console.log(router.getRoutes());
const route = useRoute()


const userStore = useUserStore();
const collapseValue = computed(() => {
  return userStore.isCollapse ? "64px" : "260px";
});
const handleCollapseChange = () => {
  userStore.isCollapse = !userStore.isCollapse;
  console.log(collapseValue.value);
};
const circleUrl = ref(
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
);
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
</style>
