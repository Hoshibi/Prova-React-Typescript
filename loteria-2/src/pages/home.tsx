import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
// import { authActions } from '../store/auth';

import Navbar from '../components/Navbar';
import RecentGames from '../components/RecentGames';
import BtnNewBet from '../components/BtnNewBet';

function Home() {
  const navigate = useNavigate();
  const token = useSelector((state: RootStateOrAny) => state.auth.token);

  const [infoGame, setInfoGame] = useState([]);
  const [recentGames, setRecentGames] = useState([]);

  //Get info Game
  const getGameHandler = useCallback(async () => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3333/cart_games',
    })
      .then(function (response:any) {
        setInfoGame(response.data.types)
      })
  }, []);

  //Get recent games
  const getRecentGamesHandler = useCallback(async () => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3333/bet/all-bets?type%5B%5D=Lotof%C3%A1cil&type%5B%5D=Mega-Sena&type%5B%5D=Quina',
      headers: {
        'Authorization': 'Bearer NDI.stLjQmayq5mf3D8Ozv-y8_h_0-UDBPm9GGpHUk0sQhe3gOvCdTtD7kbvFrkg'
      }
    })
      .then(function (response:any) {
        setRecentGames(response.data)
      });
  }, []);

  useEffect(() => {
    getGameHandler();
    getRecentGamesHandler()
  }, [getGameHandler,getRecentGamesHandler]);

  return (
    <>
      <Navbar inHome={true}/>
      <RecentGames typeGame={infoGame} recentGameInfo={recentGames}/>
      <BtnNewBet onClick={() => { navigate('/new-bet') }}/>
      {console.log("token:", token)}
    </>
  );
}

export default Home;