export interface MenuItem {
  path: string
  title: string
  // 注意：这里不再需要 permission 字段！
}

export const allMenuItems: MenuItem[] = [
  { path: '/dashboard', title: '仪表盘' },
  { path: '/users', title: '用户管理' },
]