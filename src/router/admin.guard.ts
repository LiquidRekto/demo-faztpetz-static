import { StorageUtils } from '@/utils/storage.utils'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import router from '.'

const adminGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  console.log(to)
  console.log(from)
  const tokenInfo = StorageUtils.getItem('tokenInfo')
  if (!tokenInfo) {
    router.push({
      name: 'login'
    })
    return;
  }
  next()
}

export { adminGuard }
