import styled from "styled-components";

export const InputStyle = styled.input `
    border-width: 0;
    border-bottom-width: 2px;
    border-color: #EBEBEB;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-inline: 6%;
    padding-block: 8%;;
    font-size: 19px;
    font-style: italic;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    color: #4b4b4b;

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
