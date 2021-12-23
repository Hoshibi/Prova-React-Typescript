import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/gameControl';
import { RootStateOrAny, useSelector } from 'react-redux';

import { BtnStyle } from './styles';

interface PropsType {
    value: number;
    color: string;
    max: number;
    range: number;
}

const BtnNumbers: React.FC<PropsType> = ({children, value, color, max, range}) => {
    const dispatch = useDispatch();
    const numbers = useSelector((state: RootStateOrAny) => state.game.selectedNumberList);
    
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(numbers.includes(value)){  
            setIsSelected(true); 
        }
        else{ 
            setIsSelected(false); 
        }
      }, [numbers, value]);
    

    function selectHandler() {
        if(numbers.length <= max){
            if(!isSelected){ 
                if(numbers.length === max){
                    alert(`Selecionou o máximo de números: ${max} números`)
                }
                else{
                    dispatch(gameActions.addNumberToList(value));
                }
            }
            else{ 
                dispatch(gameActions.removeNumberToList(value));
            }
        }
    }
    
    return (
        <>
        <BtnStyle value={value} onClick={selectHandler} selected={isSelected} color={color}>{children}</BtnStyle> 
        </>
    );
};

export default BtnNumbers;