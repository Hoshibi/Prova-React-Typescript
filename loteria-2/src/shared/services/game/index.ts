import axiosConfig from '../axiosConfig'

const gameServices = () => {
    async function listGames() {
        return axiosConfig.get('/cart_games')
    }

    return {
        listGames: listGames()
    }
}

export default gameServices