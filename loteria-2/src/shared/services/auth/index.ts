import axiosConfig from '../axiosConfig'
import { ILoginUser, IChangePass, IResetPass } from './interfaces'

const authServices = () => {
    async function loginUser(body:ILoginUser) {
        return axiosConfig.post('/login',body)
    }

    async function resetPassword(body:IResetPass) {
        return axiosConfig.post('/reset',body)
    }

    async function changePassword(body:IChangePass,token: string) {
        return axiosConfig.post(`/reset/${token}`,body)
    }

    return {
        loginUser: loginUser,
        resetPassword : resetPassword,
        changePassword : changePassword
    }
}

export default authServices