import React from "react";

import { BtnStyle } from './styles';
import { HiArrowRight } from 'react-icons/hi';

interface PropsType {
    onClick: () => void;
  }

const BtnNewBet: React.FC<PropsType> = ({onClick}) => {
    return (
        <BtnStyle onClick={onClick}>New Bet <HiArrowRight /></BtnStyle>
    );
};

export default BtnNewBet;