import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import { Navbar, RecentGames, BtnNewBet } from '@components/index';
import gameServices from '@shared/services/game';

function Home() {
  const navigate = useNavigate();
  const token = useSelector((state: RootStateOrAny) => state.auth.token);

  const [infoGame, setInfoGame] = useState([]);
  const [recentGames, setRecentGames] = useState([]);

  //Get info Game
  const getGameHandler = useCallback(async () => {
    gameServices().listGames.then(function (response:any) {setInfoGame(response.data.types)})
  }, []);

  //Get recent games
  const getRecentGamesHandler = useCallback(async () => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3333/bet/all-bets?type%5B%5D=Lotof%C3%A1cil&type%5B%5D=Mega-Sena&type%5B%5D=Quina',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(function (response:any) {
        setRecentGames(response.data)
      });
  }, []);

  useEffect(() => {
    getGameHandler();
    getRecentGamesHandler();
  }, [getGameHandler,getRecentGamesHandler]);

  return (
    <>
      <Navbar inHome={true}/>
      <BtnNewBet onClick={() => { navigate('/new-bet') }}/>
      <RecentGames typeGame={infoGame} recentGameInfo={recentGames}/>
    </>
  );
}

export default Home;