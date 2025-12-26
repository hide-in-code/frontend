import { useUserStore } from '@/stores/user'

export function usePermission() {
  const userStore = useUserStore()
  
  const hasPermission = (perm: string) => { return userStore.permissions.includes(perm) }

  const hasAnyPermission = (perms: string[]) => {
    perms.some(p => hasPermission(p))
  }
  
  return { hasPermission, hasAnyPermission }
}