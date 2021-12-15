import styled from "styled-components";

export const Container = styled.div `
    float: left;
    width: 51vw;
    padding-left: 10vw;
    padding-top: 12vh;
    padding-bottom: 5vh;
    font-family: 'Work Sans', sans-serif; 
    font-style: italic;
    color: #707070;

    span{
        font-size: 29px;
    }

    strong{
        font-weight: 700;
    }
    
    h4{
        font-weight: 600;
        padding-top: 5vh;
        font-size: 18px;
    }

    p{
        padding-top: 1vh;
    }
    
    button{
        height: 53px;
        border-radius: 9px;
        border-color: #11b880;
        border-width: 1px;
        border-style: solid;
        background-color: #F7F7F7;
        font-size: 16px;
        font-style: italic;
        margin-top: 6vh;
        font-weight: 600;
    }
`;

export const TitleBold = styled.span `
    font-weight: 600;
    font-style: italic;
`;

export const TitleNormal = styled.span `
    font-style: italic;
`;

export const Number = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: #ADC0C4;
    border-width: 0px;
    color: white;
    margin-left: 1vh;
    font-style: normal;
    font-size: 20px;

    &:hover {
        opacity: 0.3;
    }
`;

export const BtnGameType = styled.button `
    font-size: 14px !Important;
    font-weight: 600;
    background: #fff !Important;
    font-family: 'Work Sans', sans-serif;
    font-style: italic;
    border-radius: 30px !Important;
    border-style: solid ;
    height: 37px;
    width: 110px;
    margin-top: 3vh;
    margin-right: 2vw;

    &:hover {
        opacity: 0.6;
    }
`;

export const BtnCompleteGame = styled.button `
    color: #27C383;
    width: 168px;
    transition: 0.3s;
    margin-right: 1vw !Important;

    &:hover {
        opacity: 0.7;
    }
`;

export const BtnClearGame = styled.button `
    color: #27C383;
    width: 140px;
    transition: 0.3s;
    margin-right: 10vw;

    &:hover {
        opacity: 0.7;
    }
`;

export const BtnAdd = styled.button `
    background-color: #27C383 !Important;
    color: #fff;
    font-weight: 500;
    width: 210px;
    transition: 0.3s;

    & svg {
        font-size: 26px;
        margin-right: 0.6rem;
    }

    &:hover {
        opacity: 0.7;
    }
`;
