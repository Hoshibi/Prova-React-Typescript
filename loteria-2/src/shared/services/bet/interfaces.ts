interface purchaseDetail {
    id: number,
    numbers: Array<number>
}

export interface INewBet {
    data: {
        games: Array<purchaseDetail>;
    }
}