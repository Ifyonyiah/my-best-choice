import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <div className='intro'>
            <p>Get The Right Birth Control For You!</p>
                <h1>Refill or get a new prescription in minutes!</h1>
            <p className='details'>Getting birth control is now easier than ever. Talk to a Physician today to hear about your options.</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header;