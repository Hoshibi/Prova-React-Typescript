import styled from "styled-components";

export const Container = styled.div `
    margin-inline: 10vw;
    margin-top: 14vh;
    font-family: 'Work Sans', sans-serif; 
    font-style: italic;
    color: #707070;
`;

export const Title = styled.h1 `
    font-weight: 600;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -1px;
`;

export const InfoCard = styled.div `
    background-color: #ebebeb;
    padding: 60px;
    padding-bottom: 90px;
    margin-top: 30px;
    border-radius: 10px;

    @media (max-width: 458px) {
        &{
            padding: 30px;
            padding-bottom: 75px;
            padding-top: 50px;
        }
    }
`;

export const NameDiv = styled.div `
    display: flex;
    flex-direction: row;
`;

export const EmailDiv = styled.div `
    display: flex;
    flex-direction: row;
`;

export const BoldText = styled.p `
    font-weight: 600;
    padding-top:5px;
`;

export const Input = styled.input `
    margin-left: 10px;
    width: 50vw;
    height: 33px;
    font-family: 'Work Sans', sans-serif; 
    font-size: 17px;
    font-style: italic;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    color: #4b4b4b;
    border-radius: 5px;
    border-width: 0px;
    border-color: #EBEBEB;
    padding-inline: 10px;    

    &::placeholder {
        font-weight: 600;
        color: #9D9D9D;
    }

    &:focus { 
        outline: none !important;
        border-color: #9D9D9D;
        box-shadow: 0 0 10px #9D9D9D;
    }
`;

export const BtnEdit = styled.button `
    float: right;
    font-family: 'Work Sans', sans-serif; 
    border-radius: 5px;
    border-width: 0px;
    width: 80px;
    height: 40px;
    color: white;
    background-color: #C8D34A;
    margin-top: 22px;
    font-weight:500;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 458px) {
        &{
            margin-top: 17px;
        }
    }
`;

export const BtnCancel = styled.button `
    float: right;
    font-family: 'Work Sans', sans-serif; 
    border-radius: 5px;
    border-width: 0px;
    width: 80px;
    height: 40px;
    color: white;
    background-color: #adada6;
    margin-right: 10px;
    margin-top: 22px;
    font-weight:500;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 458px) {
        &{
            margin-top: 17px;
        }
    }
`;
