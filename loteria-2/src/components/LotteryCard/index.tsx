import React, { useEffect } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { gameActions } from '../../store/gameControl';
import { toast } from 'react-toastify';

import { Container, TitleBold, TitleNormal, BtnCompleteGame, BtnClearGame, BtnAdd } from './styles'
import { ListNumbers, ButtonGame, ModalComponent } from '@components/index'

interface PropsType {
    infos: {
        color: string,
        description: string,
        id: number,
        max_number: number,
        price: number,
        range: number,
        type: string,
    }[]
}

const LotteryCard: React.FC<PropsType> = ({ infos }) => {
    const dispatch = useDispatch();
    const gameSelected = useSelector((state: RootStateOrAny) => state.game.gameSelected);
    const indexGame = useSelector((state: RootStateOrAny) => state.game.indexGameSelected);
    const numbersSelected = useSelector((state: RootStateOrAny) => state.game.selectedNumberList);

    // Inicia setado o tipo de jogo (Primeiro da lista)
    useEffect(() => {
        dispatch(gameActions.setGame([1,0,2.5]));
    },[dispatch]);

    // Handler
    function completeGameHandler(){
        dispatch(gameActions.completeGame([infos[indexGame].range,infos[indexGame].max_number]))
    }

    function clearGameHandler(){
        dispatch(gameActions.clearGame())
    }

    function AddCartHandler() {
        if(numbersSelected.length < infos[indexGame].max_number){
            toast.warn(`Selecione ${infos[indexGame].max_number} números. Faltam ${infos[indexGame].max_number-numbersSelected.length} números para completar!`, {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
        }else{
            dispatch(gameActions.addToCart());
            dispatch(gameActions.savePurchase());
            dispatch(gameActions.clearGame());
        }
    }

    return (
        <Container>
            <TitleBold><strong>NEW BET</strong></TitleBold>
            {  infos.filter( (item) => { return item.id === gameSelected }).map((item, index) => {
                    var game = item.type
                    return (<TitleNormal key={index}> FOR {game.toLocaleUpperCase()}</TitleNormal>); } ) 
            }
            
            <h4>Choose a game</h4>
            <div> 
                {  infos.map(function ( item,index ) { 
                    return (<ButtonGame key={item.id} color={item.color} price={item.price} id={item.id} index={index} resetFilter={false}>{item.type}</ButtonGame>);
                   } ) 
                }
            </div>

            {/* Descrição do Jogo */}
            <h4>Fill your bet</h4>
            {  infos.filter( (item) => { return item.id === gameSelected }).map(function ( item ) { 
                    return (<p key={item.id} data-js="explicaGame">{item.description}</p>); } ) 
            }

            {/* Lista dos Números da Cartela */}
            {  infos.filter( (item) => { return item.id === gameSelected }).map(function ( item ) { 
                    return (<ListNumbers key={item.id} range={item.range} color={item.color} max={item.max_number}/>);
                } ) 
            }

            {/* Buttons */}
            <BtnCompleteGame onClick={completeGameHandler}>Complete game</BtnCompleteGame>
            <BtnClearGame onClick={clearGameHandler}>Clear game</BtnClearGame>
            <BtnAdd onClick={AddCartHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                Add to cart
            </BtnAdd>

            <ModalComponent title={"Números existentes"}>
                Já existe uma cartela com esses números no Carrinho. <br/> Deseja inserir novamente uma cartela com esses números?
            </ModalComponent>

        </Container>
    );
};

export default LotteryCard;