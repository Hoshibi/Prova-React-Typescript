import React from 'react';

import { NavbarContainer, Logo, BtnHome } from './styles'
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { authActions } from '@store/auth';
import { useDispatch } from 'react-redux';

interface PropsTypes {
    inHome: boolean;
  }

const Navbar: React.FC<PropsTypes> = ({ inHome }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function logoutHandler() { 
        dispatch(authActions.logout());
        navigate('/') 
    }

    return (
        <NavbarContainer>
            <ul>
                <li><Logo onClick={() => { navigate('/home') }}>TGL</Logo></li>
                {!inHome && <li><BtnHome onClick={() => { navigate('/home') }}>Home</BtnHome></li>}
            </ul>
            <ul>
                <li><button onClick={() => { navigate('/home') }}>Account</button></li>
                <li><button onClick={logoutHandler}>
                    Log out 
                    <HiArrowRight />
                </button></li>
            </ul>
        </NavbarContainer>
    );
};

export default Navbar;