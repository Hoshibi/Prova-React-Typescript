import React from 'react';

import { InputStyle } from './styles'

interface PropsType {
    dataCy?: string;
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input: React.FC<PropsType> = ({ dataCy, type, placeholder, onChange, value }) => {
    return (
        <InputStyle data-cy={dataCy} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    );
};

export default Input;