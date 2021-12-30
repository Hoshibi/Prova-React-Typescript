import styled from "styled-components";

export const Container = styled.div `
    float: left;
    width: 65vw;
    padding-left: 10vw;
    padding-top: 12vh;
    padding-bottom: 12vh;
    color: #707070;
    font-family: 'Work Sans', sans-serif;
    font-style: italic;

    @media (min-width: 864px) and (max-width:902px) {
        & {
            width: 0vw;
            width:65vw;
            padding-right:0px;
        }
    }

    @media (max-width:863px) {
        & {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 6vh;
            padding-inline: 10wh;
        }
    }
`;

export const Title = styled.span `
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -1px;

    @media (min-width: 864px) and (max-width:902px) {
        & {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width:863px) {
        & {
            display: flex;
            flex-direction: column;
            font-size: 20px;
        }
    }
`;

export const TitleFilter = styled.span `
    font-weight: 400;
    padding-left: 3vw;
    padding-right: 1vw;

    @media (min-width: 864px) and (max-width:1200px) {
        & {
            display: flex;
            flex-direction: column;
            padding-left: 0vw;
            padding-top: 2vw;
        }
    }

    @media (max-width:863px) {
        & {
            display: flex;
            flex-direction: column;
            padding-left: 0vw;
            padding-top: 2vw;
        }
    }
`;

export const TextNoPurchased = styled.div `
    margin-top: 60px;

    @media (max-width:863px) {
        & {
            margin-right: 8vw;
        }
    }
`;