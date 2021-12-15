import React from 'react';

import { InputStyle } from './styles'

interface PropsType {
    type: string;
    placeholder: string;
}

const Input: React.FC<PropsType> = ({ type, placeholder }) => {
    return (
        <InputStyle type={type} placeholder={placeholder} />
    );
};

export default Input;