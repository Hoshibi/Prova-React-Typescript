import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { authActions } from '@store/auth';
import { toast } from 'react-toastify';

//Components
import { FormContainer, TextAuth, Input, ResetPasswordLink } from '@components/index';
import authServices from '@shared/services/auth';
import { Container } from './styles';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: RootStateOrAny) => state.auth.token);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Input Change Handler
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function isValidEmail(email:string){
    var regex = new RegExp('^[\\w+.]+@[\\w]+\\.(?:\\w{2,})(?:\\.\\w{2})?$');
    return regex.test(email);
  }

  //Submit Change Handler
  const submitHandler = async (event: any) => {
    event.preventDefault();

    var errorMessage = "";

    if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
    if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
    if(email.trim().length === 0 && password.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
    if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }

    if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { 
      var body = {email: email, password: password}
      try {
        const res = await authServices().loginUser(body);
        dispatch(authActions.login(res.data.token.token));
        window.localStorage.setItem('token',res.data.token.token)
        console.log( "Token: ", res.data.token.token )
        navigate('/home');
        return res
      }catch (error: any) {
        if(error.status === 401){
          toast.error("E-mail e/ou senhas incorretas!")
        }
      }
    }else{
      toast.warn(errorMessage)
    }
  };

  return (
    <Container>
      <TextAuth />
      <FormContainer title = "Authentication" btnGreenTitle = "Log In" btnGrayTitle = "Sign Up" back = {false} onSubmit={submitHandler} isLoading={false} link='/registration'>
        <Input type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
        <Input type = "password" placeholder = "Senha" onChange={passwordChangeHandler} value={password}/>
        <ResetPasswordLink>I forget my password</ResetPasswordLink>
      </FormContainer>
    </Container>
  );
}

export default Login;