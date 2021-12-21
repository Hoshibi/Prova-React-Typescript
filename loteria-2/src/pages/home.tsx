import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import RecentGames from '../components/RecentGames';
import BtnNewBet from '../components/BtnNewBet';

function Home() {
  const navigate = useNavigate();
  const [infoGame, setInfoGame] = useState([]);
  const [recentGames, setRecentGames] = useState([]);

  const fetchGameHandler = useCallback(async () => {
    try {
      const response = await fetch('http://127.0.0.1:3333/cart_games');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setInfoGame(data.types)
    } catch (error) {
      console.log(error)
    }
  }, []);

  const fetchRecentGamesHandler = useCallback(async () => {
    try {
      const response = await fetch('http://127.0.0.1:3333/bet/all-bets?type%5B%5D=Lotof%C3%A1cil&type%5B%5D=Mega-Sena&type%5B%5D=Quina');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setRecentGames(data.types)
      console.log("Aqui", data.types);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchGameHandler();
  }, [fetchGameHandler]);

  useEffect(() => {
    fetchRecentGamesHandler();
  }, [fetchRecentGamesHandler]);

  console.log(infoGame);
  console.log(recentGames);

  return (
    <>
      <button onClick={() => { navigate('/') }}>Teste</button>
      <Navbar inHome={true}/>
      <RecentGames infos={infoGame}/>
      <BtnNewBet onClick={() => { navigate('/new-bet') }}/>
    </>
  );
}

export default Home;