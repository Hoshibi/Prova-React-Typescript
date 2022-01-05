import userServices from '@shared/services/user';
import { isValidEmail } from '@shared/helpers/isValidEmail';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Title, InfoCard, NameDiv, EmailDiv, BoldText, Input, BtnEdit, BtnCancel  } from './styles';

interface PropsType {
    name: string,
    email: string
}

const CardUpdateUser: React.FC<PropsType> = ({name,email}) => {
    const navigate = useNavigate();

    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    //Input Change Handler
    const nameChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    };

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(event.target.value);
    };

    useEffect(() => {
        setNameInput(name);
        setEmailInput(email);
    },[email, name])


    const editHandler = async (event:any) => {
        event.preventDefault();

        var errorMessage = "";
        if(nameInput.trim().length === 0) { errorMessage='Campo name vazio! Insira uma nome' }
        if(emailInput.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
        if(emailInput.trim().length === 0 && nameInput.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
        if(!isValidEmail(emailInput) && emailInput.trim().length > 0 && nameInput.trim().length > 0) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }

        if(!!isValidEmail(emailInput) && emailInput.trim().length > 0 && nameInput.trim().length > 0) { 
            var body = { email: emailInput, name: nameInput }
            try {
                const res = await userServices().updateMyUser(body);
                navigate('/account');
                return res
            }catch (error: any) {
                if(error.status === 404){
                    toast.error("Dados Inválidos!")
                }
            }
        }else{
        toast.warn(errorMessage)
        }
    }

    return (
    <Container>
        <Title>UPDATE MY USER</Title>
        <InfoCard>
            <NameDiv>
                <BoldText>Name: </BoldText>
                <Input data-cy="name-input" onChange={nameChangeHandler} value={nameInput}/>
            </NameDiv>
            <EmailDiv>
                <BoldText>Email: </BoldText>
                <Input data-cy="email-input" onChange={emailChangeHandler} value={emailInput}/>
            </EmailDiv>
            <BtnEdit data-cy="btnSubmit" onClick={editHandler}>Save</BtnEdit>
            <BtnCancel onClick={ () => {navigate('/account') }}>Cancel</BtnCancel>
        </InfoCard>
    </Container>
    );
};

export default CardUpdateUser;
