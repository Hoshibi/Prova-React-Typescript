export interface ILoginUser {
    email: string,
    password: string,
}

export interface IResetPass {
    email: string,
}

export interface IChangePass {
    password: string,
}