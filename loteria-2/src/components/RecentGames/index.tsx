import React from "react";

import { Container, Title, TitleFilter } from './styles';
import ButtonGames from "../ButtonGame";
import PurchasedCard from "../PurchasedCard";

interface PropsTypes {
    infos: 
    {
        color: string,
        description: string,
        id: number,
        max_number: number,
        price: number,
        range: number,
        type: string,
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
                return (<PurchasedCard key={item.id} numbers={item.description} date={item.type} value="R$ 2,50" gametype={item.type} color={item.color} />);
            } ) }
        </Container>
    );
};

export default RecentGames;