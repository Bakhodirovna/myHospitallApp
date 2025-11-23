import React from 'react';
import './footer.scss';
import twitter from "./images/twitter.png";
import facebook from "./images/facebook-app-symbol.png";
import linkedin from "./images/linkedin (1).png";
import insta from "./images/instagram.png";
import icon from "./images/arrow-angle-pointing-to-right.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
   
    <div className='footer'>
            
                <div className="footer__box">
                        <div className='footer__box__info'>
                                <p className='footer__box__desc__txt'>Nima uchun MediX ?</p>
                            <p className='footer__box__desc'>
                                MediX - sizning sog'lig'ingizga doimiy e'tibor beradigan, professional tibbiy xizmatlar markazi. Bizning klinikamizda zamonaviy texnologiyalar va yuqori malakali mutaxassislar yordamida sifatli tibbiy xizmat ko'rsatiladi.
                            </p>
                            <ul className='footer__box__socials'>
                                <li className='footer__box__social'><a className='footer__box__social__link' href="http://" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a></li>
                                <li className='footer__box__social'><a className='footer__box__social__link' href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a></li>
                                <li className='footer__box__social'><a className='footer__box__social__link' href="http://" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></li>
                                <li className='footer__box__social'><a className='footer__box__social__link' href="http://" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a></li>
                            </ul>
                        </div>
                        <div className='footer__box__information'>
                            <h3>Aloqa uchun</h3>
                            <ul className='footer__box__list'>
                                <li className='footer__box__list__link'><address>Toshkent shahri Shayhontohur tumani, Labzak ko`chasi` 70, 100128, Uzbekistan</address></li>
                                <li className='footer__box__list__link'><a href="mailto:medix@website.com">medix@website.com</a></li>
                                <li className='footer__box__list__link'><a href="tel:+99878-333-03-03">(+998) 78-333-03-03</a></li>
                            </ul>
                        </div>
                        <div className='footer__box__information'>
                            <h3>Havolalar</h3>
                            <ul className='footer__box__list'>
                                
                                <li>
                                    <NavLink className='footer__box__list__item' to='/about'>Biz haqimizda</NavLink>
                                </li>
                                <li>
                                    <NavLink className='footer__box__list__item' to='/doctors'>Doktorlar</NavLink>
                                </li>
                                <li>
                                    <NavLink className='footer__box__list__item' to='/news'>Yangiliklar</NavLink>
                                </li>
                                <li>
                                    <NavLink className='footer__box__list__item' to='/services'>Bizning servislar</NavLink>
                                </li>
                                <li>
                                    <NavLink className='footer__box__list__item' to='/contact'>Kontakt</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__box__forms'>
                        <h3>Kontakt formasi</h3>
                        <form className='footer__box__forms__form' action="">
                            <input className='footer__box__forms__form__input' type="text" placeholder='Sizning ismingiz' required />
                            <input className='footer__box__forms__form__input' type="text" placeholder='Sizning Emailingiz' required />
                            <textarea className='footer__box__forms__form__input' name="" id="">Sizning xabaringiz</textarea>
                            <button className='footer__box__forms__form__btn'>Yuborish</button>
                        </form>
                </div>
            
                </div>
                <div className='footer__bottom'>
                    <p className='footer__bottom__txt'>
                    2024 MediX | Barcha huquqlar himoyalangan
                    </p>
                    <p className='footer__bottom__txt'>
                        Distributed By: 
                        <a className='footer__bottom__txt__link' href="https://t.me/bakhodirovna3011"> Zakhro Dekhkonova</a>
                    </p>
                </div>
                
        </div>
  );
};

export default Footer;
