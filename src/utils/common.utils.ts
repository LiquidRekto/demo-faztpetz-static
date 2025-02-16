import { jwtDecode } from 'jwt-decode'
import { StorageUtils } from "./storage.utils"
import type { IAccount, ITokenInfo } from '@/interfaces/Account'
import type { ITokenPayload } from '@/interfaces/JWT'

export class CommonUtils {
    static getUserEmail() : string | null {
        try {
          const tokenInfoStr = StorageUtils.getItem('tokenInfo')
          console.log(tokenInfoStr)
          const tokenInfo = JSON.parse(tokenInfoStr) as ITokenInfo
          console.log(tokenInfo)
          console.log(tokenInfo.accessToken)
          const decodedAccessInfo = jwtDecode<ITokenPayload>(tokenInfo.accessToken)
          console.log(decodedAccessInfo)
          return decodedAccessInfo.sub
        } catch (e) {
          return null
        }
    }
    
}