import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { format } from "date-fns";

import { CardContainer, Numbers, DateValue, GameType } from "./styles";

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
        axios({
        method: 'get',
        url: 'http://127.0.0.1:3333/cart_games',
        })
        .then(function (response:any) {
            setInfoGame(response.data.types)
        })
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

    function inRealMoney(value: number) {
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
    }

    useEffect(() => {
        var dateFormat = new Date(date);
        var formattedDate = format(dateFormat, "dd/MM/yyyy");
        setGetDate(formattedDate);
    },[date])
    
    
    return (
        <CardContainer color={getColor}>
            <Numbers>{numbers}</Numbers>
            <DateValue>{getDate} - ({inRealMoney(value)})</DateValue>
            <GameType color={getColor}>{gametype}</GameType>
        </CardContainer>
    );
};

export default PurchasedCard;