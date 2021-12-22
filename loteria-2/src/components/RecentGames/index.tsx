import React from "react";

import { Container, Title, TitleFilter } from './styles';
import ButtonGame from "../ButtonGame";
import PurchasedCard from "../PurchasedCard";

interface PropsTypes {
    recentGameInfo: 
    {
        id: number;
        choosen_numbers: string;
        created_at: string;
        price: number;
        type: {id:number, type: string};
    }[];
    typeGame:{
        id: number,
        color: string;
        type: string;
    }[];
}

const RecentGames: React.FC<PropsTypes> = ({ typeGame, recentGameInfo }) => {

    return (
        <Container>
            <Title>RECENT GAMES</Title>
            <TitleFilter>Filters</TitleFilter>
            {/* Buttons game */}
            {  typeGame.map(function ( item ) { 
                    return (<ButtonGame key={item.id} color={item.color}>{item.type}</ButtonGame>);
                } ) 
            }

            {/* Recent Games List */}
            { recentGameInfo.map(function ( item ) { 
                return (<PurchasedCard key={item.id} numbers={item.choosen_numbers} date={item.created_at} value={item.price} gametype={item.type.type} idgame={item.type.id}/>);
            } ) }
        </Container>
    );
};

export default RecentGames;