import { useEffect, useState, useCallback} from 'react';

import { Navbar, LotteryCard, Cart } from '@components/index';
import gameServices from '@shared/services/game';

function NewBet() {

  const [info, setInfo] = useState([]);

  //Get info Game
  const getGameHandler = useCallback(async () => { 
    gameServices().listGames.then(function (response:any) {setInfo(response.data.types)})
  }, []);

  useEffect(() => {
    getGameHandler();
  }, [getGameHandler]);

  return (
    <>
      <Navbar inHome={false} inAccount={false}/>
      <LotteryCard infos={info}/>
      <Cart />
    </>
  );
}

export default NewBet;