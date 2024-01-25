import axios, { type AxiosInstance } from 'axios'

export class Http {
  isAuth: boolean
  contentType: string
  instance: AxiosInstance
  constructor(status: any, contentType: string = '') {
    this.isAuth = status && status.auth ? status.auth : false
    this.contentType = contentType ? contentType : 'application/json'
    this.instance = axios.create({
      baseURL: import.meta.env.APP_ENV === 'dev' ? '/' : import.meta.env.APP_API_URL
    })
  }
  init() {
    this.instance.interceptors.request.use(
      (request) => {
        /*
        if (this.isAuth) {
          const tokenInfoStr = StorageUtils.getItem('tokenInfo')
          const tokenInfo = JSON.parse(tokenInfoStr)
          request.headers.authorization = tokenInfo.accessToken
          request.headers['Content-Type'] = this.contentType
        }
        */
        return request
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        console.log(error)
      }
    )
    return this.instance
  }
}
