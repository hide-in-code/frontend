<script setup lang="ts">
import { loginAPI } from '@/api/auth';
import router from '@/router';
import { useUserStore } from '@/stores/user';

let userStore = useUserStore()

const loginfunc1 = () => {
  loginAPI({
    username: "admin",
    password: "123"
  }).then((res) => {
    console.log(res)
    userStore.setToken(res.token)
    userStore.setUserInfo(res.user)
    router.push('/dashboard');
  })
}

const loginfunc2 = () => {
  loginAPI({
    username: "editor",
    password: "123"
  }).then((res) => {
    console.log(res)
    userStore.setToken(res.token)
    userStore.setUserInfo(res.user)
    router.push('/dashboard');
  })
}
</script>

<template>
<div>
  login
  <a-button type="primary" @click="loginfunc1">admin点击登录</a-button>
  <a-button type="primary" @click="loginfunc2">editor点击登录</a-button>
</div>
</template>
