<script setup lang="ts">
import Permission from '@/components/Permission.vue';
</script>

<template>
  <div class="dashboard">
    <Permission permission="dashboard:view">
      <button>dashboard查看</button>
    </Permission>
    <Permission permission="user:list">
      <button>用户管理</button>
    </Permission>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px;
}
</style>