import styled from "styled-components";

interface PropsType {
    color: string;
}

export const CardContainer = styled.div<PropsType> `
    width: 38vw;
    padding-inline: 15px;
    padding-block: 3px;
    margin-top: 5vh;
    border-left: 5px solid ${(props) => props.color};
    border-radius: 3px;
    font-size: 19px;
    color: #868686;
`;

export const Numbers = styled.p `
    font-weight: 600;
`;

export const DateValue = styled.p `
    font-style: normal;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
`;

export const GameType = styled.p<PropsType> `
    font-weight: 600;
    color: ${(props) => props.color};
`;