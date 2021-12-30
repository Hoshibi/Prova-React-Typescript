import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isValidEmail } from '@shared/helpers/isValidEmail';

import { FormContainer, TextAuth, Input } from '@components/index';
import userServices from '@shared/services/user';

function Registration() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const nameChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  //Submit Handler
  const submitHandler = async (event: any) => {
    event.preventDefault();

    let errorMessage = "";
    if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
    if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
    if(name.trim().length === 0) { errorMessage='Campo name vazio! Insira uma nome' }
    if(email.trim().length === 0 && password.trim().length === 0 && name.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
    if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0) { 
      errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' 
    }

    if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0) { 
      let body = { email: email, password: password, name: name } 
      try {
        const res = await userServices().createUser(body);
        toast.success('Cadastro realiza com sucesso!', {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
        setName('');
        setEmail('');
        setPassword('');
        navigate('/'); 
        return res
      } catch (error: any) {
        if(error.status === 400){
          toast.error("Já existe uma conta com esse Email !", {autoClose: 10000})
        }
      }
    }else{
      toast.warn(errorMessage, {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
    }
  }

  return (
    <>
      <TextAuth />
      <FormContainer title = "Registration" btnGreenTitle = "Register" btnGrayTitle = "Back" back = {true}onSubmit={submitHandler} isLoading={false} link='/'>
        <Input type = "text" placeholder = "Name" onChange={nameChangeHandler} value={name}/>
        <Input type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
        <Input type = "password" placeholder = "Password" onChange={passwordChangeHandler} value={password}/>
      </FormContainer>
    </>
  );
}

export default Registration;