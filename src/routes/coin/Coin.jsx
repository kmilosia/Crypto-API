import React from 'react';
import './coin.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import DOMPurify from 'dompurify';
//import Loader from '../loader/Loader';

function Coin() {
  const params = useParams();
  const [coin, setCoin] = useState({}); //default empty object
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
    })
  },[]);

  return (
    <div>
      {isLoading ? <div class ="loader-container">
      <div class="loader">
        <div class="circle" id="a"></div>
        <div class="circle" id="b"></div>
        <div class="circle" id="c"></div>
      </div>
      <div class="loader-caption">Fetching data...</div>
    </div> : 
      <div className="coin-container">
        <div className="card">
          <h1>{coin.name}</h1>
        </div>
        <div className="card">
          <div className="rank">
            <span className='rank-button'>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p>: null}            
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price ? <h1>&euro;{coin.market_data.current_price.eur.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(1) : null}%</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(1) : null}%</td>
                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(1) : null}%</td>
                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(1) : null}%</td>
                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(1) : null}%</td>
                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(1) : null}%</td>              
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="stats">
            <div className="left">
              <div className="row">
              <h4>24 Hour Low</h4>
              {coin.market_data?.low_24h ? <p>&euro;{coin.market_data.low_24h.eur.toLocaleString()}</p> : null}
              </div>
              <div className="row">
              <h4>24 Hour High</h4>
              {coin.market_data?.high_24h ? <p>&euro;{coin.market_data.high_24h.eur.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className="right">
            <div className="row">
              <h4>Market Cap</h4>
              {coin.market_data?.market_cap ? <p>&euro;{coin.market_data.market_cap.eur.toLocaleString()}</p> : null}
              </div>
              <div className="row">
              <h4>Circulating Supply</h4>
              {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="about">
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>
            </p>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default Coin;
