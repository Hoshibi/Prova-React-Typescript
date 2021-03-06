import styled from "styled-components";

interface StyledProps {
    back: string;
}

export const Container = styled.div `
    font-size: 25px;
    font-family: 'Work Sans', sans-serif;
    float: right;
    color: #707070;
    width: 26vw;
    margin-right: 13vw;
    padding-top: 23vh;
    padding-bottom: 17vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-style: italic;
        font-size: 36px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 30px;
    }

    @media (min-width: 511px) and (max-width: 900px) {
        & {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:100% !Important;
            margin-inline: 0px;
        }
    }

    @media (max-width: 510px) {
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100% !Important;
        margin-inline: 0px;
    }
`;

export const FormDiv = styled.div `
    background-color: white;
    width: 380px;
    border-radius: 10px;
    border-width: 2px;
    border-style: solid;
    border-color: #EEEEEE;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    form {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 510px) {
    & {
        width: 360px;
    }
`;

export const BtnGreen = styled.button `
    font-family: 'Work Sans', sans-serif;
    font-style: italic;
    font-weight: 600;
    font-size: 36px;
    color: #B5C401;
    border-width: 0;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 10%;
    padding-bottom: 10%;

    & svg {
        font-size: 26px;
        margin-left: 0.9rem;
    }

    &:hover {
        opacity: 0.6;
    }
`;

export const BtnGray = styled.button<StyledProps> `
    font-family: 'Work Sans', sans-serif;
    color: #707070;
    font-style: italic;
    font-weight: 600;
    font-size: 36px;
    width: 190px;
    border-width: 0;
    background-color: transparent;
    margin-top: 10%;

    & svg {
        font-size: 26px;
        margin-left: ${props => props.back === 'other' ? '0.9rem' : ''};
        margin-right: ${props => props.back === 'back' && '0.9rem'};
    }

    &:hover {
        opacity: 0.6;
    }
`;