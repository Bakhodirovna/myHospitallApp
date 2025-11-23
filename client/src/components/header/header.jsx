import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import icon1 from './carr.svg'
import {userState} from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="header-top">
        <p className="header-message">MediX - Sizning salomatligingiz biz uchun muhim!</p>
        <p className="emergency-line">
         <img className='icon' src={icon1} alt="" />
         
            Favqulotda yordam liniyasi (+998) 78-333-03-03</p>
      </div>
      <nav className="header">
            {/* BURGER */}
      <div className="burger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className="logo">
          <Link to="/" className='logo'>
            {/* <img src="http://medix.acrothemes.com/wp-content/themes/medix/images/logo.png" alt="Medica Logo" /> */}
            <h1 >MediX</h1>
          </Link>
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          
          <Link to="/">Asosiy</Link>
          <Link to="/about">Biz haqimizda</Link>
          <Link to="/doctors">Doktorlar</Link>
          <Link to="/news">Yangiliklar</Link>
          <Link to="/services">Bizning servislar</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
        {/* LOGIN */}
      <div className={`login ${open ? "open" : ""}`}>
        <Link to="/appointment">Qabulga yoziling</Link>
      </div>
        
      </nav>
    </>
  );
}

export default Header;


