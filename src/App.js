import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Coins from "./components/coins/Coins";
import Navbar from "./components/navbar/Navbar";
import Coin from "./routes/coin/Coin";

function App() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    }).catch((error) => {
      console.log(error);
    })
  },[]);

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins}/>}/>
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}/> 
          {/* :coinId is parameter for Coin to use with useParams */}
        </Route>
      </Routes>     
    </div>
  );
}

export default App;
