import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {

  return(
    <>  
     <nav>
        <ul className="navbar">
          <Link to="/#performances">  
            <li>Performances</li>
          </Link>
          <Link to="/#about_us"> 
            <li>About Us</li>
          </Link>
          <Link to="/#team"> 
            <li>Team</li>
          </Link>
          <Link to="/#prices">
            <li>Prices</li>
          </Link>
          <Link to="/#comments">
            <li>Comments</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;