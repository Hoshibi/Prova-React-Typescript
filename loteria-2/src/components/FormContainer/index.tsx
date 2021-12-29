import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { Container, FormDiv, BtnGreen, BtnGray } from './styles'
// import { Spinner } from 'react-bootstrap';

interface PropsType {
  title: string;
  btnGreenTitle: string;
  btnGrayTitle: string;
  back: boolean;
  onSubmit: (event: any) => void;
  isLoading: boolean;
  link: string;
}

const FormContainer: React.FC<PropsType> = ({ children, title, btnGreenTitle, btnGrayTitle, back, onSubmit, isLoading, link }) => {
  const navigate = useNavigate();

  let typeBtnGray : string;
  back ? typeBtnGray = 'back' : typeBtnGray = 'other';

  function buttonNavigateHandler() {
    navigate(link);
  }
  
  return (
      <Container >
        <h1>{title}</h1>
        <FormDiv>
          <form onSubmit={onSubmit}>
            {children}
            <BtnGreen>{btnGreenTitle}<HiArrowRight /></BtnGreen>
          </form>
        </FormDiv>
          <BtnGray back={typeBtnGray} onClick={buttonNavigateHandler}>
            {!!back && <HiArrowLeft /> }
            {btnGrayTitle}
            {!back && <HiArrowRight />}
          </BtnGray>
      </Container>
  );
};

export default FormContainer;