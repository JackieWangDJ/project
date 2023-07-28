<template>
  <div>peimission: {{tst}}</div>

</template>
<script setup lang="ts">
import { reqUSERNihao } from '@/api/user/index'
import { UserResponseData } from '@/api/user/type';
import { ref } from 'vue';
const tst = ref<UserResponseData>();
(async ()=>{
  const res = await reqUSERNihao()
  console.log(res)
  if(res) tst.value = res
})()
</script>
<style scoped lang="scss"></style>
