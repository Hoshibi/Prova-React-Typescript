import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { gameActions } from '../../store/gameControl'

import { ButtonStyle, ButtonSelectedStyle } from './styles';

interface PropsType {
    color: string;
    id: number;
    index: number;
    resetFilter: boolean;
  }

const ButtonGames: React.FC<PropsType> = ({ children, color, id, index, resetFilter}) => {
    const dispatch = useDispatch();
    const gameSelected = useSelector((state: RootStateOrAny) => state.game.gameSelected);

    function buttonHandler() {
        gameSelected === id && !!resetFilter && dispatch(gameActions.setGame([0,0]));
        gameSelected !== id && dispatch(gameActions.setGame([id,index]));

        dispatch(gameActions.clearGame())
    }

    return (
        <>
            {gameSelected === id && <ButtonSelectedStyle color={color} onClick={buttonHandler}>{children}</ ButtonSelectedStyle >}
            {gameSelected !== id && <ButtonStyle color={color} onClick={buttonHandler}>{children}</ ButtonStyle >}
        </>
    );
};

export default ButtonGames