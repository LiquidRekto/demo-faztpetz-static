import type { IAccountLogin } from "@/interfaces/Account";
import { BaseService } from "./base.service";
import { API_ACCOUNT_LOG_IN } from "@/constants/endpoints";
import type { AxiosError } from "axios";

export class AuthService extends BaseService {
    static async login(data: IAccountLogin) {
        try {
            const response = await this.request({ auth: false }).post(
              API_ACCOUNT_LOG_IN,
              data
            )
            return response
          } catch (error: any) {
            return (error as AxiosError).response
          }
      
    }

    static async logout() {

    }

    static async register() {
      
    }
}