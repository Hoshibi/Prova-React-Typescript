import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormContainer, TextAuth, Input } from '@components/index';
import authServices from '@shared/services/auth';
import { RootStateOrAny, useSelector } from 'react-redux';

function ChangePassword() {
  const navigate = useNavigate();
  const token = useSelector((state: RootStateOrAny) => state.auth.token);

  const [senha, setSenha] = useState('');

  const senhaChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();

    var errorMessage = "";
    if(senha.trim().length === 0) { errorMessage='Campo senha vazio! Insira uma senha.' }

    if(senha.trim().length > 0 ) { 
      var body = {password: senha}
      try {
        const res = await authServices().changePassword(body,token);
          toast.success('Senha alterada com sucesso!', {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
          setSenha('');
          navigate('/');
        return res
      } catch (error: any) {
          toast.error(error)
      }
    }else{
      toast.warn(errorMessage)
    }
  }

  return (
    <>
      <TextAuth />
      <FormContainer title ="Change password" btnGreenTitle="Change" btnGrayTitle="Back " back={true} onSubmit={submitHandler} isLoading={false} link='/reset-password'>
        <Input type = "password" placeholder = "Senha" onChange={senhaChangeHandler} value={senha}/>
      </FormContainer>
    </>
  );
}

export default ChangePassword;