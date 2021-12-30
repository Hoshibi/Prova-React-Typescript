import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Navbar, RecentGames, BtnNewBet } from '@components/index';
import gameServices from '@shared/services/game';
import betServices from '@shared/services/bet';
import { gameActions } from '@store/gameControl';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gameToFilter = useSelector((state: RootStateOrAny) => state.game.gameToFilter);

  const [infoGame, setInfoGame] = useState([]);
  const [recentGames, setRecentGames] = useState([]);

  //Get info Game
  const getGameHandler = useCallback(async () => {
    gameServices().listGames.then(function (response:any) {setInfoGame(response.data.types)})
  }, []);

  const getRecentGamesHandler = useCallback(async () => {
    betServices().listBet(gameToFilter).then(function (response:any) {setRecentGames(response.data)})
  }, [gameToFilter]);

  useEffect(() => {
    getGameHandler();
    getRecentGamesHandler();
  }, [getGameHandler,getRecentGamesHandler]);

  function btnNewBet() {
    dispatch(gameActions.clearGameToFilter());
    navigate('/new-bet')
  }

  return (
    <>
      <Navbar inHome={true} inAccount={false}/>
      <BtnNewBet onClick={btnNewBet}/>
      <RecentGames typeGame={infoGame} recentGameInfo={recentGames}/>
    </>
  );
}

export default Home;