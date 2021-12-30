import styled from "styled-components";

export const BtnStyle = styled.button `
    padding-top: 13vh;
    padding-right:13vw;
    float: right;
    background-color: transparent;
    border-width: 0px;
    color: #B5C401;
    font-family: 'Work Sans', sans-serif;
    font-style: italic;
    font-weight: 600;
    font-size: 29px;

    &:hover {
        opacity: 0.7;
    }

    & svg {
        font-size: 28px;
        margin-left: 1.1rem;
    }

    /* @media (min-width: 511px) and (max-width: 863px) {
        & {
            margin-left: 2vw;
            display: flex;
            flex-direction: column;
        }
    } */

    @media (max-width: 862px) {
    & {
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        margin-left:0;
        padding-left:10vw;
        padding-top:10vh;
        font-size: 25px;
    }

    
`;