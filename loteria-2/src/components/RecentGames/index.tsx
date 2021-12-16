import React from "react";

import { Container, Title, TitleFilter } from './styles';
import ButtonGames from "../ButtonGame";
import PurchasedCard from "../PurchasedCard";

interface PropsTypes {
    infos: 
        {
            number: string;
            date: string;
            price: string;
            game: string;
            color: string;
        }[]
    ;
}

const RecentGames: React.FC<PropsTypes> = ({ infos }) => {
    return (
        <Container>
            <Title>RECENT GAMES</Title>
            <TitleFilter>Filters</TitleFilter>
            <ButtonGames color="#7F3992">Lotofácil</ButtonGames>
            <ButtonGames color="#01AC66">Mega-Sena</ButtonGames>
            <ButtonGames color="#F79C31">Lotomania</ButtonGames>
            {  infos.map(function ( item ) { 
                console.log(item.game)
                return (<PurchasedCard numbers={item.number} date={item.date} value="R$ 2,50" gametype={item.game} color={item.color} />);
            } ) }
        </Container>
    );
};

export default RecentGames;