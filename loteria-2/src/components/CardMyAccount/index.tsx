import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Title, InfoCard, NameDiv, EmailDiv, BoldText, NormalText, BtnEdit  } from './styles';

interface PropsType {
    name: string, 
    email: string
}

const CardMyAccount: React.FC<PropsType> = ({name, email}) => {
    const navigate = useNavigate();

    return (
    <Container>
        <Title>MY ACCOUNT</Title>
        <InfoCard>
            <NameDiv>
                <BoldText>Name: </BoldText>
                <NormalText>{name}</NormalText>
            </NameDiv>
            <EmailDiv>
                <BoldText>Email: </BoldText>
                <NormalText>{email}</NormalText>
            </EmailDiv>
            <BtnEdit onClick={() => { navigate('/update-user') }}>Editar</BtnEdit>
        </InfoCard>
    </Container>
    );
};

export default CardMyAccount;
