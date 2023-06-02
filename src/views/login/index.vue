<template>
  <div class="login_container">
    <el-row :gutter="20">
      <el-col :span="12" :xs="0" :offset="0"></el-col>
      <el-col class="form_container" :span="12" :xs="1" :offset="0">
        <el-form :model="userform" ref="form">
          <h1>Login</h1>
          <el-form-item label="">
            <el-input v-model="userform.username" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="userform.password" type="password" :prefix-icon="Lock" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >登录</el-button>
          </el-form-item>
        </el-form>
        
      </el-col>
    </el-row>
    
  </div>
</template>
<script setup lang='ts'>
  import { reactive } from 'vue';
  import { User, Lock } from '@element-plus/icons-vue';
  const userform = reactive({
    username: <string>'',
    password: <string>'',
  })
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  box-sizing: border-box;
  .form_container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    justify-items: center;
    .el-form {
    width: 500px;
    height: 200px;
    position: relative;
    background: url('@/assets/images/login_form.png');
    margin-top: 20px;
  }
  }
  
}
</style>