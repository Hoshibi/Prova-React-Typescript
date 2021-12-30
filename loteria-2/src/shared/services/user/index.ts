import axiosConfig from '../axiosConfig'
import { ICreateUser } from './interfaces'

const userServices = () => {
    async function myProfile() {
        return axiosConfig.get('/user/my-account')
    }

    async function createUser(body:ICreateUser) {
        return axiosConfig.post('/user/create',body)
    }

    return {
        createUser: createUser,
        myProfile: myProfile
     }
}

export default userServices

// Criar 3 métodos que utilizam o axios config para fazer as requisições de users