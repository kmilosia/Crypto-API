import React from 'react';
import './navbar.css';
import {FaCoins} from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
        <FaCoins className="icon" />
        <h1>Coin<span className='purple'>Search</span></h1>
    </nav>
  )
}

export default Navbar;
