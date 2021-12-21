// import { useEffect, useState, useCallback} from 'react';

// import Navbar from '../components/Navbar';
// import LotteryCard from '../components/LotteryCard';
// import Cart from '../components/Cart';

function NewBet() {

  // const [info, setInfo] = useState([])
  // const fetchBetHandler = useCallback(async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:3333/cart_games');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();
  //     setInfo(data.types)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchBetHandler();
  // }, [fetchBetHandler]);

  // console.log(info);

  return (
    <>
      {/* <Navbar inHome={false}/>
      <LotteryCard infos={info}/>
      <Cart /> */}
      <h1>Oi</h1>
    </>
  );
}

export default NewBet;