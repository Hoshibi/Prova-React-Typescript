import axiosConfig from '../axiosConfig'
import { ICreateUser, IUpdateUser } from './interfaces'

const userServices = () => {

    async function myProfile() {
        return axiosConfig.get('/user/my-account',{ headers: {"Authorization" : `Bearer ${window.localStorage.getItem('token')}`}} );
    }

    async function updateMyUser(body:IUpdateUser) {
        return axiosConfig.put('/user/update', body,{ headers: {"Authorization" : `Bearer ${window.localStorage.getItem('token')}`}} );
    }

    async function createUser(body:ICreateUser) {
        return axiosConfig.post('/user/create',body)
    }

    return {
        createUser: createUser,
        myProfile: myProfile,
        updateMyUser: updateMyUser
     }
}

export default userServices

// Criar 3 métodos que utilizam o axios config para fazer as requisições de users