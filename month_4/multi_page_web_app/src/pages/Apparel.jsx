import React from 'react';

import { Link } from 'react-router-dom';

const  Apparel =()=>{
    return(
        <div className='shoesBox'>
            <li className='liOfShoes'>
                <Link to={'/apparel/ap1'}>
                    <img src='/Images/ap1.jpg' alt='Nike'></img>
                </Link>
                <p>NIKE</p>
            </li>
            <li className='liOfShoes'>
                <Link to={'adidas'}>
                    <img src='/Images/ap2.jpg' alt='adidas'></img>
                </Link>
                <p>Adidas</p>
            </li>
            <li className='liOfShoes'>
                <Link to={'crocs'}>
                    <img src='/Images/ap3.jpg' alt='crocs'></img>
                </Link>
                <p>Crocs</p>
            </li>
            <li className='liOfShoes'>
                <Link to={'birkenstock'}>
                    <img src='/Images/ap4.jpg' alt='birkenstock'></img>
                </Link>
                <p>Birkenstock</p>
            </li>
            </div>
          
    )
}

export default Apparel;