import styled from "styled-components";

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(228, 228, 228, 0.945);
    height: 75px;
    padding-left: 7vw;
    padding-right: 13vw;
    font-style: italic;

    button{
        color: rgb(110, 110, 110);
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
        font-weight: 600;
        font-size:22px;
        transition: 0.3s;
        display: flex;
        margin-left: 3.5vw;
        background-color: transparent !Important;
        border-width: 0px;
        font-style: italic;
        margin-top: 20px !Important;
    }

    button svg {
        font-size: 26px;
        margin-left: 0.6rem;
        margin-top: 0.2rem;
    }

    button:hover {
        opacity: 0.7;
    }

    ul{
        list-style: none;
        display: flex;
    }
`;

export const Logo = styled.button `
    color: rgb(110, 110, 110);
    font-size:50px !Important;
    letter-spacing: -2px;
    align-items: center !Important;
    height: 70px;
    border-bottom: 6px solid #b5c401 !Important;
    border-radius: 3px;
    margin-left: 1vw !Important;
    margin-top: 28px !Important;
    
`;

export const BtnHome = styled.button `
    margin-left: 6vw !Important;
    padding-top: 16px !Important;
`;