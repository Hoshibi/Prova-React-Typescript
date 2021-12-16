import React from 'react';

import Navbar from '../components/Navbar';
import RecentGames from '../components/RecentGames';

function Home() {
  return (
    <>
      <Navbar inHome={true}/>
      <RecentGames />
    </>
  );
}

export default Home;