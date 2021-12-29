import React, { useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { gameActions } from "../../store/gameControl";

import { Container, Title, TitleFilter, TextNoPurchased } from './styles';
import { ButtonGame, PurchasedCard } from "../index";

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
    const gameSelected = useSelector((state: RootStateOrAny) => state.game.gameSelected);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(gameActions.setGame([0,0]));
    },[])

    return (
        <Container>
            <Title>RECENT GAMES</Title>
            <TitleFilter>Filters</TitleFilter>
            {/* Buttons game */}
            {  typeGame.map(function ( item, index ) { 
                    return (<ButtonGame key={item.id} color={item.color} price={item.price} id={item.id} index={index} resetFilter={true}>{item.type}</ButtonGame>);
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
            { recentGameInfo.length <= 0 && 
                <TextNoPurchased>
                    <p>Não há nenhuma compra de jogo realizado !</p>
                    <p>Para realizar uma compra aperte em NEW BET.</p>
                </TextNoPurchased>
            }
            
        </Container>
    );
};

export default RecentGames;