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
`;

export const FirstText = styled.h1 `
    font-size: 65px;
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
    margin-bottom: 1.1rem; 
`;

export const LastText = styled.h1 `
    font-weight: 700;
    font-size: 81px;
`;
    
