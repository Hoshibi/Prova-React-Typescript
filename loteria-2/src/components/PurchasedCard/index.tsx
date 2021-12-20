import React from "react";

import { CardContainer, Numbers, DateValue, GameType } from "./styles";

interface PropsType {
    numbers: string;
    date: string;
    value: string;
    gametype: string;
    color: string;
}

const PurchasedCard: React.FC<PropsType> = ({ numbers, date, value, gametype, color }) => {
    return (
        <CardContainer color={color}>
            <Numbers>{numbers}</Numbers>
            <DateValue>{date} - ({value})</DateValue>
            <GameType color={color}>{gametype}</GameType>
        </CardContainer>
    );
};

export default PurchasedCard;