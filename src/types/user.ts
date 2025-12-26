export interface User {
  id: number
  name: string
  roles: string[]
  permissions: string[]
  menu: string[]
}

export interface RouteMeta {
  roles?: string[]
  requiresAuth?: boolean
}