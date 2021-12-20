import React from 'react';

import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { Container, FormDiv, BtnGreen, BtnGray } from './styles'
import { Spinner } from 'react-bootstrap';

interface PropsType {
  title: string;
  btnGreenTitle: string;
  btnGrayTitle: string;
  back: boolean;
  onSubmit: (event: any) => void;
  isLoading: boolean;
}

const FormContainer: React.FC<PropsType> = ({ children, title, btnGreenTitle, btnGrayTitle, back, onSubmit, isLoading }) => {

  let typeBtnGray : string;
  back ? typeBtnGray = 'back' : typeBtnGray = 'other';
  
  return (
      <Container >
        <h1>{title}</h1>
        <FormDiv>
          <form onSubmit={onSubmit}>
            {children}
            <BtnGreen>{btnGreenTitle}<HiArrowRight /></BtnGreen>
          </form>
        </FormDiv>
        {isLoading }
        {!isLoading && 
          <BtnGray back={typeBtnGray}>
            {!!back && <HiArrowLeft />}
            {btnGrayTitle}
            {!back && <HiArrowRight />}
          </BtnGray>
        }
        {!!isLoading && <Spinner animation="border" variant="success" />}
      </Container>
  );
};

export default FormContainer;