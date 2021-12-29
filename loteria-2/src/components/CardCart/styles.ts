import styled from "styled-components";

interface StyledProps {
    color: string;
}

export const CardGame = styled.div `    
    display:inline-flex;
    align-content: center;
    margin-bottom: 5vh;
`;

export const BtnLixoDiv = styled.div `
    display:inline-flex !Important;
    align-content: center !Important;
    justify-content: center !Important;

    svg{
        margin-top: 60% !Important;
        padding-right: 13px !Important;
        border-width: 0px !Important;
        border-style: none !Important;
        background-color: white !Important;
        color: rgb(110, 110, 110) !Important;
    }
`;

export const NumbersDiv = styled.div<StyledProps> `
    border-radius: 5px !Important;
    border-style: solid !Important;
    border-width: 0px !Important;
    border-left-width: 5px !Important;
    border-color: ${props => props.color} !Important;
    padding-bottom: 1vh !Important;
    padding-left: 1vw !Important;
`;

export const Numbers = styled.p `
    padding-top: 1vh !Important;
    margin-bottom: 0px !Important;
    font-style: italic !Important;
    font-weight: 600 !Important;
    font-size: 15px !Important;
`;

export const TipoGame = styled.span<StyledProps> `
    font-size: 17px !Important;
    font-weight: 600 !Important;
    font-style: italic !Important;
    color: ${props => props.color} !Important;
`;

export const ValorUnid = styled.span `
    font-size: 17px !Important;
    font-weight: 300 !Important;
    padding-left: 2vh !Important;
`;