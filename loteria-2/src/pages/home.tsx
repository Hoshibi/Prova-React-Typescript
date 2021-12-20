import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import RecentGames from '../components/RecentGames';
import BtnNewBet from '../components/BtnNewBet';

function Home() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([])

  const fetchBetHandler = useCallback(async () => {
    try {
      const response = await fetch('http://127.0.0.1:3333/cart_games');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setInfo(data.types)

    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchBetHandler();
  }, [fetchBetHandler]);

  console.log(info);

  return (
    <>
      <button onClick={() => { navigate('/') }}>Teste</button>
      <Navbar inHome={true}/>
      <RecentGames infos={info}/>
      <BtnNewBet />
    </>
  );
}

export default Home;