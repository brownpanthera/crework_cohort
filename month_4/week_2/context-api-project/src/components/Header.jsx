import { Link } from 'react-router-dom';
import React from 'react';

const Header = ()=>{
    return(
        <div>
          {/* <h2>React Context API</h2> */}
          <ul className='nav'>
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
    )
}
export default Header;