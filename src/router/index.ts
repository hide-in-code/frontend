import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', component: () => import('@/views/Login.vue') },
  {
    path: '/',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'users',
        component: () => import('@/views/Users.vue')
      },
    ]
  },
  { path: '/403', component: () => import('@/views/Forbidden.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login')
    return
  }

  if (to.meta.requiresAuth && userStore.isLoggedIn) {
    const allowedMenuPaths = userStore.userInfo?.menu || []
    const fullPath = to.path
    if (!allowedMenuPaths.includes(fullPath)) {
      next('/403')
      return
    }
  }

  next()
})

export default router