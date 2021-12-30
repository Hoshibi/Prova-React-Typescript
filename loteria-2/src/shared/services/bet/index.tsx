import axiosConfig from '../axiosConfig'
import { INewBet } from './interfaces';

const betServices = () => {
    async function newBet(body: INewBet) {
        return axiosConfig.post('/bet/new-bet', body,{ headers: {"Authorization" : `Bearer ${window.localStorage.getItem('token')}`}});
    }

    async function listBet(arr: Array<string>) {
        return axiosConfig.get('bet/all-bets',{ headers: {"Authorization" : `Bearer ${window.localStorage.getItem('token')}`}, params: { "type[]" : arr}});
    }

    return {
        newBet: newBet,
        listBet: listBet
    }
}

export default betServices;