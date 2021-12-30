import axiosConfig from '../axiosConfig'
import { INewBet } from './interfaces';

const betServices = () => {
    async function newBet(body: INewBet) {
        return axiosConfig.post('/bet/new-bet', body);
    }

    async function listBet(arr: Array<string>) {
        return axiosConfig.get('bet/all-bets',{ params: { "type[]" : arr}});
    }

    return {
        newBet: newBet,
        listBet: listBet
    }
}

export default betServices;