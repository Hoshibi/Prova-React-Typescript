import React from "react";

import { BtnStyle } from './styles';
import { HiArrowRight } from 'react-icons/hi';

const BtnNewBet: React.FC = () => {
    return (
        <BtnStyle>New Bet <HiArrowRight /></BtnStyle>
    );
};

export default BtnNewBet;