import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

//Pages
import Login from './pages/login';
import Home from './pages/home';
import Registration from './pages/registration';
import ResetPassword from './pages/resetPassword';
import NewBet from './pages/newBet';
import NotFound from './pages/notFound/';

//Global Style
import { GlobalStyle } from './globalStyle';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-bet" element={<NewBet />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
