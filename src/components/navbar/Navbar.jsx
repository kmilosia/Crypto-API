import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import {FaCoins} from 'react-icons/fa';

function Navbar() {
  return (
    <Link to="/">
      <nav>
        <FaCoins className="icon" />
        <h1>Coin <span className='purple'>Search</span></h1>
      </nav>
    </Link>
  )
}

export default Navbar;
