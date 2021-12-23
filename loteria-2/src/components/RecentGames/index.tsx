import React from "react";
import { useSelector, RootStateOrAny } from 'react-redux';
// import { gameActions } from '../../store/gameControl'

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
    const gameSelected = useSelector((state: RootStateOrAny) => state.game.gameSelected);

    return (
        <Container>
            <Title>RECENT GAMES</Title>
            <TitleFilter>Filters</TitleFilter>
            {/* Buttons game */}
            {  typeGame.map(function ( item ) { 
                    return (<ButtonGame key={item.id} color={item.color} id={item.id} resetFilter={true}>{item.type}</ButtonGame>);
                } ) 
            }

            {/* Recent Games List */}
            { gameSelected !== 0 &&
                recentGameInfo
                .filter( (item) => { return item.type.id === gameSelected })
                .map( (item) => { 
                    return (<PurchasedCard key={item.id} numbers={item.choosen_numbers} date={item.created_at} value={item.price} gametype={item.type.type} idgame={item.type.id}/>) ;
                }) 
            }
            { gameSelected === 0 &&
                recentGameInfo.map( (item) => { 
                    return (<PurchasedCard key={item.id} numbers={item.choosen_numbers} date={item.created_at} value={item.price} gametype={item.type.type} idgame={item.type.id}/>) ;
                }) 
            }
            
        </Container>
    );
};

export default RecentGames;