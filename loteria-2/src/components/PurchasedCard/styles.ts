import styled from "styled-components";

interface PropsType {
    color: string;
}

export const CardContainer = styled.div<PropsType> `
    width: 55vw;
    padding-inline: 15px;
    padding-block: 3px;
    margin-top: 5vh;
    border-left: 5px solid ${(props) => props.color};
    border-radius: 3px;
    font-size: 19px;
    color: #868686;

    @media (max-width: 862px){
        &{
            width: 82vw;
            padding-top: 10px;
        }
    }
`;

export const Numbers = styled.p `
    font-weight: 600;
    margin-bottom: 0;
`;

export const DateValue = styled.p `
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
`;

export const GameType = styled.p<PropsType> `
    margin-bottom: 0;
    font-weight: 600;
    color: ${(props) => props.color};
`;