import React from "react";

import { ButtonStyle } from './styles';

interface PropsType {
    color: string;
  }

const ButtonGames: React.FC<PropsType> = ({ children, color }) => {
    return (
        <ButtonStyle color={color}>{children}</ ButtonStyle >
    );
};

export default ButtonGames