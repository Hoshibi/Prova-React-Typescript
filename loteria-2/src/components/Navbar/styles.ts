import styled from "styled-components";

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(228, 228, 228, 0.945);
    height: 75px;
    padding-left: 9vw;
    padding-right: 13vw;
    backgroud-color: red;
    font-style: italic;

    a{
        color: rgb(110, 110, 110);
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
        font-weight: 600;
        font-size:22px;
        transition: 0.3s;
        display: flex;
        padding-left: 3.5vw;
    }

    a svg {
        font-size: 26px;
        margin-left: 0.6rem;
    }

    a:hover {
        opacity: 0.7;
    }

    ul{
        list-style: none;
        display: flex;
    }
`;

export const Logo = styled.a `
    color: rgb(110, 110, 110);
    font-size:55px !Important;
    margin-left: 1vw;
    letter-spacing: -2px;
    align-items: center !Important;
    height: 100%;
    border-bottom: 6px solid #b5c401;
    border-radius: 3px;
    padding-left: 0vw !Important;
    
`;

export const BtnLogo = styled.a `
    padding-left: 6vw !Important;
    padding-top: 25px !Important;
`;