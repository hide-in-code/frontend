<template>
  <div class="admin-layout">
    <header class="header">
      <h1>管理后台</h1>
      <div class="user-info">
        <span>你好，{{ userStore.userInfo?.name }}</span>
        <button @click="handleLogout" class="logout-btn">退出登录</button>
      </div>
    </header>

    <div class="main-container">
      <aside class="sidebar">
        <nav>
          <ul>
            <li v-for="item in visibleMenuItems" :key="item.path">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { allMenuItems } from '@/types/menu'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// ✅ 核心：只显示后端允许的菜单
const visibleMenuItems = computed(() => {
  const allowedPaths = userStore.userInfo?.menu || []
  return allMenuItems.filter(item => allowedPaths.includes(item.path))
})

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 60px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logout-btn {
  padding: 0.25rem 0.75rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #c82333;
}

.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 220px;
  background-color: #343a40;
  color: white;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  border-bottom: 1px solid #495057;
}

.sidebar a {
  display: block;
  padding: 1rem 1.5rem;
  color: #adb5bd;
  text-decoration: none;
  transition: background-color 0.2s;
}

.sidebar a:hover,
.sidebar a.router-link-exact-active {
  background-color: #495057;
  color: white;
}

.content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  background-color: #f1f3f5;
}
</style>