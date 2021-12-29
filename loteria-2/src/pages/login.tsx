import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { toast } from 'react-toastify';

//Components
import { FormContainer, TextAuth, Input, ResetPasswordLink } from '../components/';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //Input Change Handler
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  //Submit Change Handler
  function isValidEmail(email:string){
    var regex = new RegExp('^[\\w+.]+@[\\w]+\\.(?:\\w{2,})(?:\\.\\w{2})?$');
    return regex.test(email);
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    let url = 'http://127.0.0.1:3333/login';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(() => {
            var errorMessage = "";

            if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
            if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
            if(email.trim().length === 0 && password.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
            if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }
            if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Email e/ou senha incorreta! Verifique novamente' }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.login(data.token.token));
        navigate('/home');
      })
      .catch((err) => {
        toast.error(err.message, {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
      });
  };

  return (
    <>
      <TextAuth />
      <FormContainer title = "Authentication" btnGreenTitle = "Log In" btnGrayTitle = "Sign Up" back = {false} onSubmit={submitHandler} isLoading={isLoading} link='/registration'>
        <Input type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
        <Input type = "password" placeholder = "Senha" onChange={passwordChangeHandler} value={password}/>
        <ResetPasswordLink>I forget my password</ResetPasswordLink>
      </FormContainer>
    </>
  );
}

export default Login;