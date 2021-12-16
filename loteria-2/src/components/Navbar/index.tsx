import React from 'react';

import { NavbarContainer, Logo, BtnLogo } from './styles'
import { HiArrowRight } from 'react-icons/hi';

interface PropsTypes {
    inHome: boolean;
  }

const Navbar: React.FC<PropsTypes> = ({ inHome }) => {
    return (
        <NavbarContainer>
            <ul>
                <li><Logo href="/">TGL</Logo></li>
                {!inHome && <li><BtnLogo href="/">Home</BtnLogo></li>}
            </ul>
            <ul>
                <li><a href="/">Account</a></li>
                <li><a href="/">
                    Log out 
                    <HiArrowRight />
                </a></li>
            </ul>
        </NavbarContainer>
    );
};

export default Navbar;