import React, { useState, useEffect, useCallback } from 'react';
import { format } from "date-fns";

import { convertMoneyInReal } from '@shared/helpers/convertMonetaryValue';
import { CardContainer, Numbers, DateValue, GameType } from "./styles";
import gameServices from '@shared/services/game';

interface PropsType {
    numbers: string;
    date: string;
    value: number;
    gametype: string;
    idgame: number;
}

const PurchasedCard: React.FC<PropsType> = ({ numbers, date, value, gametype, idgame }) => {

    const [infoGame, setInfoGame] = useState([]);
    const [getColor, setGetColor] = useState("");
    const [getDate, setGetDate] = useState("");

    const getGameHandler = useCallback(async () => {
        gameServices().listGames.then(function (response:any) {setInfoGame(response.data.types)})
    }, []);

    useEffect(() => {
        getGameHandler();
    }, [getGameHandler]);

    useEffect(() => {
        infoGame.map(function ( item: {id:number, color: string} ) { 
            if( item.id === idgame ) { setGetColor(item.color) }
            return true;
        } )
    },[idgame,infoGame])

    useEffect(() => {
        var dateFormat = new Date(date);
        var formattedDate = format(dateFormat, "dd/MM/yyyy");
        setGetDate(formattedDate);
    },[date])
    
    return (
        <CardContainer color={getColor}>
            <Numbers>{numbers.replace(/,/g,', ')}</Numbers>
            <DateValue>{getDate} - ({convertMoneyInReal(value)})</DateValue>
            <GameType color={getColor}>{gametype}</GameType>
        </CardContainer>
    );
};

export default PurchasedCard;