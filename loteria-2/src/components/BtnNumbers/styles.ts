import styled from "styled-components";

interface StyledProps {
    color: string;
    selected: boolean;
}

export const BtnStyle = styled.button <StyledProps>`
    background-color: ${props => (!!props.selected ? props.color : '#ADC0C4')} !Important;
    width: 70px !Important;
    height: 70px !Important;
    border-radius: 35px !Important;
    border-width: 0px !Important;
    color: white !Important;
    margin-right: 1vh !Important;
    font-style: normal !Important;
    font-size: 20px !Important;

    &:hover {
        opacity: 0.7;
    }
`;