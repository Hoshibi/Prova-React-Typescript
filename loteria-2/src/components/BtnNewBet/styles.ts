import styled from "styled-components";

export const BtnStyle = styled.button `
    padding-top: 13vh;
    padding-left: 18vh;
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
`;