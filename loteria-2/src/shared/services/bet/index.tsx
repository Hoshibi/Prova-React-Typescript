import axiosConfig from '../axiosConfig'
import { INewBet } from './interfaces';

const betServices = () => {
    async function newBet(body: INewBet) {
        let config = { headers: { 'Authorization': `Bearer MTE3.oz19kJL_H-FT9-pzNuYOtgjAJBuJtH0PWdIAWBvNVFLB3lQALPsvoGrc4rTW`}}
        return axiosConfig.post('/bet/new-bet', body, config);
    }
    return {
        newBet: newBet
    }
}

export default betServices;