import styled from "styled-components";

export const Container = styled.div `
    float: right;
    width: 23vw;
    margin-right: 12vw;
`;

export const CartContainer = styled.div `
    width: 23vw;
    border-radius: 7px;
    margin-top: 7vh;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(218, 218, 218);
    background-color: white;
    font-family: 'Work Sans', sans-serif;
    color: #707070;
    float: right;
    
    span{
        font-size: 25px;
        font-style: normal;
    }
`;

export const TitleCart = styled.h2 `
    font-size: 25px;
    font-weight: 600;
    font-style: italic !Important;
    margin-bottom: 5vh;
`;

export const TotalPriceDiv = styled.div `
    margin-block: 5vh;
`;

export const TotalTextBold = styled.span `
    font-weight: 600;
    font-style: italic !Important;
`;

export const InfoCart = styled.div `
    padding-inline: 1vw;
    padding-top: 4vh;
`;

export const BtnSave = styled.button `
    background-color:rgb(243, 243, 243);
    color: #11b880;
    border-width: 0px !Important;
    border-top-width: 1px !Important;
    border-color: rgb(218, 218, 218) !Important;
    border-radius: 0px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 23vw;
    height: 90px;
    font-size: 40px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        font-size: 35px;
        margin-left: 1.1rem;
    }

    &:hover{
        transition: 0.5s;
        background-color: #11b880;
        color: rgb(243, 243, 243);
    }
`;

export const NumberContainer = styled.div `
    height: 40vh;
    overflow: auto;
`;
