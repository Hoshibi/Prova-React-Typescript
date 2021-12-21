import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    font-style: italic;
    font-size: 100;
    font-size: 17px;
    padding-inline: 7%;
    padding-top: 7%;
    text-align: right;
    color: #C1C1C1;
    text-decoration-line: none;

    &: hover{
        opacity: 0.7;
    }
`;