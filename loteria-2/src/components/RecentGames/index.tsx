import React from "react";
import { useSelector, RootStateOrAny} from 'react-redux';

import { Container, Title, TitleFilter, TextNoPurchased } from './styles';
import { BtnFilter, PurchasedCard } from "../index";

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
        price: number;
    }[];
}

const RecentGames: React.FC<PropsTypes> = ({ typeGame, recentGameInfo }) => {
    const gameToFilter = useSelector((state: RootStateOrAny) => state.game.gameToFilter);   

    return (
        <Container>
                <Title>RECENT GAMES</Title>
                <TitleFilter>Filters</TitleFilter>
            {/* Buttons game */}
            {  typeGame.map(function ( item, index ) { 
                    return (<BtnFilter key={item.id} color={item.color} game={item.type}>{item.type}</BtnFilter>);
                } ) 
            }

            {/* Recent Games List */}
            {recentGameInfo
                .map( (item) => { 
                    return (<PurchasedCard key={item.id} numbers={item.choosen_numbers} date={item.created_at} value={item.price} gametype={item.type.type} idgame={item.type.id}/>) ;
                }) 
            }
            { recentGameInfo.length <= 0 && 
                <TextNoPurchased>
                    <p>Não há nenhuma compra de jogo {gameToFilter.join(', ')} realizado !</p>
                    <p>Para realizar uma compra aperte em NEW BET.</p>
                </TextNoPurchased>
            }
            {console.log(gameToFilter.join(','))}
            
        </Container>
    );
};

export default RecentGames;