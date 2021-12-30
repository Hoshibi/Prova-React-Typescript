import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 23vh;

    float: left;
    width: 51vw;

    font-style: italic;
    font-family: 'Work Sans', sans-serif;
    color: #707070;
    text-align: center;

    @media (min-width: 511px) and (max-width: 900px) {
        & {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:100%;
            padding-top: 15vh;
            padding-inline: 15vh;
        }
    }

    @media (max-width: 510px) {
        & {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:100%;
            padding-top: 15vh;
        }
    
`;

export const FirstText = styled.h1 `
    font-size: 65px;
    font-weight: 600;

    @media (min-width: 511px) and (max-width: 900px) {
        & {
            font-size: 60px;
        }
    }

    @media (max-width: 510px) {
    & {
        font-size: 50px;
    }
`;

export const CenterText = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-weight: 500;
    color: white;

    background-color: #B5C401;
    border-radius: 30px;
    height: 2.5rem;   
    width: 9rem;  
    margin-top: 1.1rem; 
    margin-bottom: 1.1rem; 

    @media (max-width: 510px) {
    & {
        font-size: 24px;
    }
`;

export const LastText = styled.h1 `
    font-weight: 700;
    font-size: 81px;

    @media (min-width: 511px) and (max-width: 900px) {
        & {
            font-size: 70px;
        }
    }

    @media (max-width: 510px) {
    & {
        font-size: 65px;
    }
`;
    
