/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HiArrowRight } from 'react-icons/hi';
import { gameActions } from '@store/gameControl';

import { CardCart } from '@components/index';
import { convertMoneyInReal } from '@shared/helpers/convertMonetaryValue';
import gameServices from '@shared/services/game/';
import { Container, CartContainer, TitleCart, InfoCart, BtnSave, TotalPriceDiv, TotalTextBold, NumberContainer } from './styles'
import betServices from '@shared/services/bet';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const token = useSelector((state: RootStateOrAny) => state.auth.token);
    const totalPrice = useSelector((state: RootStateOrAny) => state.game.totalPrice);
    const gamesToCart = useSelector((state: RootStateOrAny) => state.game.gamesToCart);
    const savePurchaseList = useSelector((state: RootStateOrAny) => state.game.savePurchaseList);
    
    const [info, setInfo] = useState([]);

    //Get listGames
    gameServices().listGames.then(function (response:any) {setInfo(response.data.types)})

    const btnSaveHandler = async (event: any) => {        
        event.preventDefault();

        var body = {data: {games: savePurchaseList}}

        try {
            window.localStorage.setItem('token',token)
            console.log(window.localStorage.getItem('token'));

            const res = await betServices().newBet(body);
            console.log("response: ",res);
            dispatch(gameActions.cleanCart());
            toast.success('Compra realizada com sucesso!', {position: "top-right", autoClose: 6000, closeOnClick: true, pauseOnHover: true});
            navigate('/home');
            return res
        }catch(error: any) {
            console.log("error teste: ",error)
        }
        
        // axios({
        //     method: 'post',
        //     data: {
        //         "games": savePurchaseList
        //     },
        //     url: 'http://127.0.0.1:3333/bet/new-bet',
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // })
        // .then(function (response:any) {
        //     if (response.ok) {
        //         return response.json();
        //     } 
        //     dispatch(gameActions.cleanCart());
        //     toast.success('Compra realizada com sucesso!', {position: "top-right", autoClose: 6000, closeOnClick: true, pauseOnHover: true});
        //     navigate('/home');
        // })
        // .catch((err) => {
        //     if(totalPrice < 5) { toast.warn('Valor mínimo autorizado: R$5,00.', {position: "top-right", autoClose: 6000, closeOnClick: true, pauseOnHover: true});}
        //     else{ toast.error(err.message, {position: "top-right", autoClose: 6000, closeOnClick: true, pauseOnHover: true}); }
        // });
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
                        <span>TOTAL: {convertMoneyInReal(totalPrice)}</span>
                    </TotalPriceDiv>
                </InfoCart>
                <BtnSave onClick={btnSaveHandler}>
                    Save
                    <HiArrowRight />
                </BtnSave> 
            </CartContainer>
        </Container>
    );
};

export default Cart;
