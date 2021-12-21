import React from "react";

import { StyledLink } from './styles';

const ResetPasswordLink: React.FC = () => {
    return (
        <StyledLink to='/reset-password'>I forgot my password</StyledLink>
    );
};

export default ResetPasswordLink;