import React from 'react';

import { Container, FirstText, CenterText, LastText } from './styles';

const TextAuth: React.FC = () => {
    return (
        <Container>
          <FirstText>The <br/> Geatest <br/> App </FirstText>
          <CenterText>for</CenterText>
          <LastText>LOTTERY </LastText>
        </Container>
    );
};

export default TextAuth;