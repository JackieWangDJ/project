<template>
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      enter-active-class="animated animate__fadeInRight"
      leave-active-class="animated animate__fadeOutRight"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.animate__fadeInRight,
.animate__fadeOutRight {
  animation-duration: 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
