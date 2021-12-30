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
`;

export const NormalText = styled.p `
    font-weight: 400;
    padding-left: 10px;
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
