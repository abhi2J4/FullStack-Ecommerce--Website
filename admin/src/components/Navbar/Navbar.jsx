import React from 'react';
import "./Navbar.css"
import navlogo from '../../assets/nav_logo.png'
import navProfile from '../../assets/profile_image.png'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={navlogo}  alt="" className='nav-logo'/>
    <img src={navProfile}  alt="" className='banner_mens.png'/>

   
    </div>
  );
}
  
export default Navbar;
