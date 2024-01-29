import type { AxiosError } from "axios";
import { BaseService } from "./base.service";

export class TestService extends BaseService {
    static async testGet() {
        try {
            const response = await this.request().get(
               //API_ENV.MAIN + API_ACCOUNT_LOG_IN,
               'https://api.sampleapis.com/avatar/info'
            )
            console.log(response)
            return response
          } catch (error: any) {
            return (error as AxiosError).response
          }
    }
}