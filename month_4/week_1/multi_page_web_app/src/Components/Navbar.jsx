import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>FOOTWEAR</Link>
          </li>
          <li>
            <Link to='/apparel'>APPAREL</Link>
            </li>
            <li>
            <Link>SLIDES</Link>
            </li>
            <li>
            <Link>ACCESSORIES</Link>
            </li>
            <li>
            <Link>ART</Link>
            </li>
        </ul>
      </nav>
    )
}

export default Navbar;