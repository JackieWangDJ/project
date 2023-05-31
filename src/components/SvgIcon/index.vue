<template>
  <!-- svg标签需要与 use 标签配合使用，引用图标在 use 里面使用XLink:href, 在里面使用 #icon-<图标名>，改变颜色使用fill属性 -->
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
// 接收父组件传递的参数
defineProps({
  // 图标前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 图标名
  name: {
    type: String,
    required: true,
  },
  // 图标颜色
  color: {
    type: String,
    default: "",
  },
  // 图标宽
  width: {
    type: String,
    default: "16px",
  },
  // 图标高
  height: {
    type: String,
    default: "16px",
  },
});
</script>
<style scoped></style>
