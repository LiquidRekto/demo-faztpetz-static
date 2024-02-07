export interface IAccountLogin {
    username: string,
    password: string
}

export interface IAccountGender {
    id: number,
    name: string
}

export interface IAccountRole {

}

export interface IAccount {
    id: number,
    userName: string,
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    roles: Array<IAccountRole>
}

export interface ITokenInfo {
    accessToken: string
}