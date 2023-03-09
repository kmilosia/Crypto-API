import React from 'react';

function CoinItem(props) {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className="image-symbol">
        <img src={props.coins.image} alt="/" />
        <p>{props.coins.symbol}</p>
      </div>
      <p>{props.coins.current_price}</p>
      <p>{props.coins.price_change_percentage_24h}</p>
      <p className='hide-mobile'>{props.coins.total_volume}</p>
      <p className='hide-mobile'>{props.coins.market_cap}</p>
    </div>
  )
}

export default CoinItem;
