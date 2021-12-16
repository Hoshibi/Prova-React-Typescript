import styled from "styled-components";

interface StyledProps {
    color: string;
}

export const ButtonStyle = styled.button<StyledProps> `
    font-size: 14px;
    font-weight: 600;
    background: #fff;
    font-family: 'Work Sans', sans-serif;
    font-style: italic;
    border-radius: 30px;
    border-style: solid;
    height: 34px;
    width: 112px;
    margin-top: 3vh;
    margin-right: 1vw;
    color: ${props => props.color};
    border-color: ${props => props.color};

    &:hover{
        opacity: 0.6;
    }
`;