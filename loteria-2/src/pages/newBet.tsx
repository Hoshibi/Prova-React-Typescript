import React from 'react';

import Navbar from '../components/Navbar';
import LotteryCard from '../components/LotteryCard';
import Cart from '../components/Cart';

function NewBet() {
  return (
    <>
      <Navbar inHome={false}/>
      <LotteryCard />
      <Cart />
    </>
  );
}

export default NewBet;