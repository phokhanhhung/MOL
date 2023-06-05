import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo_blue from '../../Assets/images/logo_mol_blue.png';
import logo_grey from '../../Assets/images/logo_mol_grey.png';
import { useSelector } from 'react-redux';

function Footer() {

  const isDarkMode = useSelector(state => state.mode.isDarkMode);

  return (
    <div className="footer" style={{color: isDarkMode ? "#fff" : ""}}>
      <div className="footer__brand">
        <div className="footer__brand-line" style={{width:"48%", height:"1px", backgroundColor:"#9E9B9B"}}></div>
        <p>MoL</p>
        <div className="footer__brand-line" style={{width:"48%", height:"1px", backgroundColor:"#9E9B9B"}}></div>
      </div>

      <div className="footer__main">
        <Link to="/" className="footer__main-logo">
          <img src={isDarkMode ? logo_grey : logo_blue} alt="logo" />          
        </Link>

        <div className="footer__main-list">
          <div className="footer__main-item">
            <h4>Service</h4>
            <p>Q & A</p>
            <p>Need help?</p>
          </div>
          <div className="footer__main-item">
            <h4>Policy</h4>
            <p>Our terms</p>
          </div>
          <div className="footer__main-item">
            <h4>About</h4>
            <p>Website</p>
          </div>
        </div>

        <div className="footer__main-media">
          <p>Follow us on</p>
          <div className="footer__main-media-items">
            <FontAwesomeIcon icon={brands('facebook')} />
            <FontAwesomeIcon icon={brands('instagram-square')} />
            <FontAwesomeIcon icon={brands('twitter')} />
          </div>
        </div>
      </div>

      <div className="footer__site">
        <p>www.mol.com</p>
      </div>
    </div>
  )
}

export default Footer