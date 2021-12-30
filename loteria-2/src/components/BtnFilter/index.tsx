import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { gameActions } from '@store/gameControl'

import { ButtonStyle, ButtonSelectedStyle } from './styles';

interface PropsType {
    color: string;
    game: string;
  }

const BtnFilter: React.FC<PropsType> = ({ children, color, game }) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    function buttonHandler() {
        !!selected  && dispatch(gameActions.removeGameToFilter(game)) && setSelected(false);
        !selected && dispatch(gameActions.addGameToFilter(game)) && setSelected(true) 
    }

    return (
        <>
            {!!selected && <ButtonSelectedStyle color={color} onClick={buttonHandler}>{children}</ ButtonSelectedStyle >}
            {!selected && <ButtonStyle color={color} onClick={buttonHandler}>{children}</ ButtonStyle >}
        </>
    );
};

export default BtnFilter