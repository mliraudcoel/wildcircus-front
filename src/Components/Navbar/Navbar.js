import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return(
    <>  
     <nav>
        <ul className="navbar">
            <li><a href="#Performances">Performances</a></li>
            <li><a href="#About_us">About Us</a></li>
            <li><a href="#Prices">Prices</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;