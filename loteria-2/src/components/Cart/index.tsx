import React from 'react';

import { HiArrowRight } from 'react-icons/hi';
import { Container, CartContainer, TitleCart, InfoCart, BtnSave, TotalPriceDiv, TotalTextBold } from './styles'

const Cart: React.FC = () => {
    return (
        <Container>
            <CartContainer>
                <InfoCart >
                    <TitleCart>CART</TitleCart>
                    <div className="listaJogosDesejados" data-js="listaJogosDesejados">
                        <p className="carrinhoVazio" data-js="carrinhoVazio">[ Carrinho Vazio ] </p>
                    </div>
                    <TotalPriceDiv>
                        <TotalTextBold>CART </TotalTextBold> 
                        <span data-js="total">TOTAL: R$ 0,00</span>
                    </TotalPriceDiv>
                </InfoCart>
                <BtnSave>
                    Save
                    <HiArrowRight />
                    {/* style="margin-left: 0.6vw;" */}
                </BtnSave> 
            </CartContainer>
        </Container>
    );
};

export default Cart;