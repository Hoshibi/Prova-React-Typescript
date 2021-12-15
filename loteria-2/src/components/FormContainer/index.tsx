import React from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

import { Container, FormDiv, BtnGreen, BtnGray } from './styles'

interface PropsType {
  title: string;
  btnGreenTitle: string;
  btnGrayTitle: string;
  back: boolean;
}

const FormContainer: React.FC<PropsType> = ({ children, title, btnGreenTitle, btnGrayTitle, back}) => {

  let typeBtnGray : string;
  back ? typeBtnGray = 'back' : typeBtnGray = 'other';
  
  return (
      <Container >
        <h1>{title}</h1>
        <FormDiv>
          <form>
            {children}
            <BtnGreen>{btnGreenTitle}<HiArrowRight /></BtnGreen>
          </form>
        </FormDiv>
        <BtnGray back={typeBtnGray}>
          {!!back && <HiArrowLeft />}
          {btnGrayTitle}
          {!back && <HiArrowRight />}
        </BtnGray>
      </Container>
  );
};

export default FormContainer;