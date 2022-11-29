import React from 'react';

import { Link } from 'react-router-dom';

const  Main =()=>{
    return(
        <div className='shoesBox'>
            <li className='liOfShoes'>
                <Link to={'nike'}>
                    <img src='/Images/nike1.jpg' alt='Nike'></img>
                </Link>
                <p>NIKE</p>
            </li>
            <li className='liOfShoes'>
                <Link to={'adidas'}>
                    <img src='/Images/adidas1.jpg' alt='adidas'></img>
                </Link>
                <p>Adidas</p>
            </li>
            <li className='liOfShoes'>
                <Link to={'crocs'}>
                    <img src='/Images/crocs.jpg' alt='crocs'></img>
                </Link>
                <p>Crocs</p>
            </li>
            <li className='liOfShoes'>
                <Link to={'birkenstock'}>
                    <img src='/Images/birkenstock.jpg' alt='birkenstock'></img>
                </Link>
                <p>Birkenstock</p>
            </li>
            </div>
          
    )
}

export default Main;