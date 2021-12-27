/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

import { HiArrowRight } from 'react-icons/hi';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store/gameControl';
import CardCart from '../CardCart';
import { Container, CartContainer, TitleCart, InfoCart, BtnSave, TotalPriceDiv, TotalTextBold, NumberContainer } from './styles'

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootStateOrAny) => state.auth.token);
    const totalPrice = useSelector((state: RootStateOrAny) => state.game.totalPrice);
    const gamesToCart = useSelector((state: RootStateOrAny) => state.game.gamesToCart);
    const savePurchaseList = useSelector((state: RootStateOrAny) => state.game.savePurchaseList);
    
    const [info, setInfo] = useState([]);

    //Get info Game
    const getGameHandler = useCallback(async () => {
        axios({
        method: 'get',
        url: 'http://127.0.0.1:3333/cart_games',
        })
        .then(function (response:any) {
            setInfo(response.data.types)
        })
    }, []);

    useEffect(() => {
        getGameHandler();
    }, [getGameHandler]);

    function btnSaveHandler(event: any){        
        event.preventDefault();
        
        axios({
            method: 'post',
            data: {
                "games": savePurchaseList
            },
            url: 'http://127.0.0.1:3333/bet/new-bet',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(function (response:any) {
            console.log("resposta: ",response);
            if (response.ok) {
                return response.json();
            } 
            dispatch(gameActions.cleanCart());
            alert("Compra realizada com sucesso!");
        })
        .catch((err) => {
            if(totalPrice < 5) { alert("Valor mínimo autorizado é R$ 5,00") }
            else{ alert(err.message);}
        });
    }

    return (
        <Container>
            <CartContainer>
                <InfoCart >
                    <TitleCart>CART</TitleCart>
                    <NumberContainer>  
                        {gamesToCart.length === 0 && <p>[ Carrinho Vazio ] </p>}     
                        {gamesToCart.length !== 0 && gamesToCart.map(function ( item:any, index:number ) { 
                                return (<CardCart key={index} game={info} index={item.game} numbers={item.num}/>);
                        } )} 
                    </NumberContainer>
                    <TotalPriceDiv>
                        <TotalTextBold>CART </TotalTextBold> 
                        <span>TOTAL: {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </TotalPriceDiv>
                </InfoCart>
                {console.log(savePurchaseList)}
                <BtnSave onClick={btnSaveHandler}>
                    Save
                    <HiArrowRight />
                </BtnSave> 
            </CartContainer>
        </Container>
    );
};

export default Cart;
