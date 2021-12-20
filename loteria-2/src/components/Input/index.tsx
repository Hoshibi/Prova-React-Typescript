import React from 'react';

import { InputStyle } from './styles'

interface PropsType {
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input: React.FC<PropsType> = ({ type, placeholder, onChange, value }) => {
    return (
        <InputStyle type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    );
};

export default Input;