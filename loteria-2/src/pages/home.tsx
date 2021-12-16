import React from 'react';

import Navbar from '../components/Navbar';
import RecentGames from '../components/RecentGames';
import BtnNewBet from '../components/BtnNewBet';

let info = [
  {
    "number": "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    "date": "30/11/2020",
    "price": "R$ 2,50",
    "game": "Lotofácil",
    "color": "#7F3992",
  },
  {
    "number": "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    "date": "30/11/2020",
    "price": "R$ 2,50",
    "game": "Megasena",
    "color": "#01AC66",
  },
  {
    "number": "01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25",
    "date": "30/11/2020",
    "price": "R$ 2,50",
    "game": "Lotomania",
    "color": "#F79C31",
  }
];

function Home() {

  console.log(info);
  return (
    <>
      <Navbar inHome={true}/>
      <RecentGames infos={info}/>
      <BtnNewBet />
    </>
  );
}

export default Home;