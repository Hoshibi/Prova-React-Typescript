import React from "react";
import { useDispatch} from "react-redux";
import { gameActions } from "@store/gameControl";

import { NumbersDiv, Numbers, TipoGame, ValorUnid, BtnLixoDiv, CardGame } from './styles';
import { convertMoneyInReal } from '@shared/helpers/convertMonetaryValue';

interface PropsType {
    game: {
        color: string,
        price: number,
        type: string,
    }[],
    index: number,
    numbers: string,
}

const CardCart: React.FC<PropsType> = ( {game, index, numbers} ) => {
    const dispatch = useDispatch();

    function btnLixoHandler() {
        dispatch(gameActions.deleteToCart(numbers))
    }
    return (
        <>
            <CardGame>
                <BtnLixoDiv onClick={btnLixoHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                </BtnLixoDiv>
                <NumbersDiv color={game[index].color}>
                    <Numbers>{numbers}</Numbers>
                    <TipoGame data-cy="cardTypeGame" color={game[index].color}>{game[index].type}</TipoGame>
                    <ValorUnid>{`${convertMoneyInReal(game[index].price)}`}</ValorUnid>
                </NumbersDiv>
            </CardGame>
        </>
    );
};

export default CardCart;