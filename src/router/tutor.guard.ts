import { StorageUtils } from '@/utils/storage.utils'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import router from '.'

const tutorGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  console.log(to)
  console.log(from)
  
  next()
}

export { tutorGuard }
