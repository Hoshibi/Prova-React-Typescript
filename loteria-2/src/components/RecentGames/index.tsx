import React from "react";

import { Container, Title, TitleFilter } from './styles';
import ButtonGame from "../ButtonGame";
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
            {/* Buttons game */}
            {  infos.map(function ( item ) { 
                    return (<ButtonGame key={item.id} color={item.color}>{item.type}</ButtonGame>);
                } ) 
            }

            {/* Recent Games List */}
            {  infos.map(function ( item ) { 
                return (<PurchasedCard key={item.id} numbers={item.description} date={item.type} value="R$ 2,50" gametype={item.type} color={item.color} />);
            } ) }
        </Container>
    );
};

export default RecentGames;