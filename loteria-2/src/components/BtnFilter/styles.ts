import styled from "styled-components";

interface StyledProps {
    color: string;
}

export const ButtonStyle = styled.button<StyledProps> `
    font-size: 14px !Important;
    font-weight: 600 !Important;
    background: #fff !Important;
    font-family: 'Work Sans', sans-serif;
    font-style: italic !Important;
    border-radius: 30px !Important;
    border-color: ${props => props.color} !Important;
    border-width: 2px !Important;
    border-style: solid !Important;
    height: 34px !Important;
    width: 112px !Important;
    margin-top: 3vh !Important;
    margin-right: 1vw !Important;
    color: ${props => props.color} !Important;

    &:hover{
        opacity: 0.6;
    }

    @media (max-width: 868px) {
        & {
            margin-right: 1vw !Important;
            margin-top: 2vh !Important;
        }
    }
`;

export const ButtonSelectedStyle = styled.button<StyledProps> `
    font-size: 14px !Important;
    font-weight: 600 !Important;
    background: ${props => props.color} !Important;
    font-family: 'Work Sans', sans-serif;
    font-style: italic !Important;
    border-radius: 30px !Important;
    border-color: ${props => props.color} !Important;
    border-width: 2px !Important;
    border-style: solid !Important;
    height: 34px !Important;
    width: 112px !Important;
    margin-top: 3vh !Important;
    margin-right: 1vw !Important;
    color: white !Important;

    &:hover{
        opacity: 0.6;
    }

    @media (max-width: 862px) {
        & {
            margin-right: 1vw !Important;
        }
    }
    
`;