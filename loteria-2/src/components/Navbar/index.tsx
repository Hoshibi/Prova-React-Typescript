import React from 'react';

import { NavbarContainer, Logo, BtnHome } from './styles'
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { authActions } from '@store/auth';
import { useDispatch } from 'react-redux';
import { gameActions } from '@store/gameControl';

interface PropsTypes {
    inHome: boolean;
    inAccount: boolean;
  }

const Navbar: React.FC<PropsTypes> = ({ inHome, inAccount }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function logoutHandler() { 
        dispatch(authActions.logout());
        window.localStorage.setItem('token',"")
        navigate('/') 
    }

    function btnHome() {
        navigate('/home') 
        dispatch(gameActions.clearGameToFilter());
    }

    function btnAccount() {
        navigate('/account') 
        dispatch(gameActions.clearGameToFilter());
    }

    return (
        <NavbarContainer>
            <ul>
                <li><Logo onClick={btnHome}>TGL</Logo></li>
                {!inHome && 
                <li><BtnHome onClick={btnHome}>Home</BtnHome></li>}
            </ul>
            <ul>
                {!inAccount && <li><button onClick={btnAccount}>Account</button></li>}
                <li><button onClick={logoutHandler}>
                    Log out 
                    <HiArrowRight />
                </button></li>
            </ul>
        </NavbarContainer>
    );
};

export default Navbar;