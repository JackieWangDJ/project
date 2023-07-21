<template>
  <div class="test-router-animation">
    <div>user</div>
    <div>{{ person.name }} --- {{ person.age }} --- {{ person.study.english }}</div>
    <div>
      <el-button type="primary" size="default" @click="person.name+='~'">姓名</el-button>
      <el-button type="primary" size="default" @click="person.age++">年龄</el-button>
      <el-button type="primary" size="default" @click="person.study.english++">成绩</el-button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { shallowReactive } from "vue";
const person = shallowReactive({
  name: "John",
  age: 18,
  study: {
    english: 38,
  }
})
</script>
<style scoped lang='scss'>
.test-router-animation {
  width: 100%;
  height: 500px;
  background-color: #e74c3c;
}
</style>