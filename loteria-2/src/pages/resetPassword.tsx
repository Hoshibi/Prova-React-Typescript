import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isValidEmail } from '@shared/helpers/isValidEmail';

import { FormContainer, TextAuth, Input } from '@components/index';
import authServices from '@shared/services/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '@store/auth';

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();

    var errorMessage = "";
    if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
    if(!isValidEmail(email) && email.trim().length > 0 ) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }
    
    if(!!isValidEmail(email) && email.trim().length > 0 ) { 
      var body = {email: email}
      try {
        const res = await authServices().resetPassword(body);
          toast.success('Insir uma senha nova!', {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
          dispatch(authActions.login(res.data.token));
          setEmail('');
          navigate('/change-password');
        return res
      } catch (error: any) {
        if(error.status === 404){
          toast.error("Não há cadastro com esse e-mail")
        }
      }
    }else{
      toast.warn(errorMessage)
    }
  }

  return (
    <>
      <TextAuth />
      <FormContainer title ="Reset password" btnGreenTitle="Send link" btnGrayTitle="Back " back={true} onSubmit={submitHandler} isLoading={false} link='/'>
        <Input dataCy="email-input" type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
      </FormContainer>
    </>
  );
}

export default ResetPassword;