import React from 'react';

import { Container } from './styles'

import BtnNumbers from '../BtnNumbers';

interface PropsType {
    range: number;
    color:string;
    max: number;
}

const ListNumbers: React.FC<PropsType> = ({range, color, max}) => {
    let rows = []
    for (let i = 1; i <= range; i++) {
        if(i<10){rows.push(<BtnNumbers key={i} value={i} color={color} max={max} range={range}>{"0"+i}</BtnNumbers>)}
        else{ rows.push(<BtnNumbers key={i} value={i} color={color} max={max} range={range}>{i}</BtnNumbers>) }
    }

    return (
        <Container>{rows}</Container>
    );
};

export default ListNumbers;