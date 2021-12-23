import { useEffect, useState, useCallback} from 'react';
import axios from "axios";

import Navbar from '../components/Navbar';
import LotteryCard from '../components/LotteryCard';
import Cart from '../components/Cart';

function NewBet() {

  const [info, setInfo] = useState([])

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

  return (
    <>
      <Navbar inHome={false}/>
      <LotteryCard infos={info}/>
      <Cart />
    </>
  );
}

export default NewBet;