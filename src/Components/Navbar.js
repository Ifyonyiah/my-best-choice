import { MenuItem } from '@mui/material';
import React from 'react';
import logoimg1 from '../Images/logoimg1.png';

function Navbar() {


  return (
    <nav>
        <a href='#' className='logo'>
            <img src={logoimg1} alt='logo' />
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        
        <ul className='menu'>
        <li><a href='#'className='active'>Home</a></li> 
            <li><a href='#'>About</a></li>
            <li><a href='#'>Physicians</a></li>
            <li><a href='#'>Prescription</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        
        <a href='#' className='prescription'>Prescriptions</a>
    </nav>
  )
}

export default Navbar;