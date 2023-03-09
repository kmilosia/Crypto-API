import React from 'react';
import '../coins/coins.css';

function CoinItem(props) {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className="image-symbol">
        <img src={props.coins.image} alt="/" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>&euro;{props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>&euro;{props.coins.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>&euro;{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem;
