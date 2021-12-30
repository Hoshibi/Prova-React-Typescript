import axiosConfig from '../axiosConfig'
import { ICreateUser, IUpdateUser } from './interfaces'

const userServices = () => {

    async function myProfile() {
        return axiosConfig.get('/user/my-account');
    }

    async function updateMyUser(body:IUpdateUser) {
        return axiosConfig.put('/user/update', body );
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