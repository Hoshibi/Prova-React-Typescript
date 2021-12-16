import React from "react";

import { Container, Title, TitleFilter } from './styles';
import ButtonGames from "../ButtonGame";

const RecentGames: React.FC = () => {
    return (
        <Container>
            <Title>RECENT GAMES</Title>
            <TitleFilter>Filters</TitleFilter>
            <ButtonGames />
        </Container>
    );
};

export default RecentGames;