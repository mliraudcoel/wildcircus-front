import React from 'react';
import './Footer.css';

const Footer = () => {

  return(
    <>
    <div className="footer">
    <div className="footerSocials">
        <ul className="listSocials list-unstyled">
          <li>
            <a href="https://fr-fr.facebook.com/WildCodeSchool/" target='blank' className="social"><img src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`} alt="icone Facebook" height="50" /></a>
          </li>
          <li>
            <a href="https://twitter.com/wildcodeschool" target='blank' className="social">
              <img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} alt="icone twitter" height="50" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer;