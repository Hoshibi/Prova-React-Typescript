import React from 'react';

import { Container, TitleBold, TitleNormal, BtnCompleteGame, BtnClearGame, BtnAdd } from './styles'

import ButtonGame from '../ButtonGame';

interface PropsType {
    infos: {
        color: string,
        description: string,
        id: number,
        max_number: number,
        price: number,
        range: number,
        type: string,
    }[]
}

const LotteryCard: React.FC<PropsType> = ({ infos }) => {
    return (
        <Container>
            <TitleBold><strong>NEW BET</strong></TitleBold>
            <TitleNormal data-js="tituloGame"> FOR LOTAFÁCIL</TitleNormal>
            <h4>Choose a game</h4>
            <div> 
                {  infos.map(function ( item ) { 
                    return (<ButtonGame key={item.id} color={item.color}>{item.type}</ButtonGame>);
                } ) }
            </div>
                <h4>Fill your bet</h4>
                <p data-js="explicaGame">{infos[0].description}</p>
            <div data-js="listaNumeros">
                <div data-js="conjuntoNumeros"></div>
            </div>
            <BtnCompleteGame data-js="btCompleteGame">Complete game</BtnCompleteGame>
            <BtnClearGame data-js="btClearGame">Clear game</BtnClearGame>
            <BtnAdd className="btAdd" data-js="btAdd">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                Add to cart
            </BtnAdd>  
        </Container>
    );
};

export default LotteryCard;