export interface User {
  id: number
  name: string
  roles: string[]
  permissions: string[]      
  menu: string[]            
}

export const loginAPI = ({ username, password }: { username: string; password: string }) => {
  return new Promise<{ token: string; user: User }>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin') {
        resolve({
          token: 'fake-token-admin',
          user: {
            id: 1,
            name: 'Admin',
            roles: ['admin'],
            permissions: [
              'dashboard:view',
              'user:list', 'user:create', 'user:update', 'user:delete',
              'article:list', 'article:create', 'article:update', 'article:delete'
            ],
            menu: ['/dashboard', '/users']
          }
        })
      } else if (username === 'editor') {
        resolve({
          token: 'fake-token-editor',
          user: {
            id: 2,
            name: 'Editor',
            roles: ['editor'],
            permissions: [
              'dashboard:view',
              'article:list', 'article:create', 'article:update'
            ],
            menu: ['/dashboard']
          }
        })
      } else {
        reject(new Error('用户名或密码错误'))
      }
    }, 300)
  })
}