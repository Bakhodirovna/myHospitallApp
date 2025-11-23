import React, { useState, useEffect } from 'react';
import Myslider from './slider';
import styles from './home.scss';
import {Link, NavLink} from 'react-router-dom'
import HeroCarousel from './heroCarusel';
import otziv from '../images/otziv.png';
import doc from '../images/about1.png';
import appointment from '../images/calendar.png'
import findDoc from '../images/findDoctor.png'
import location from '../images/loca.png'
import call from '../images/calll.png'


const Home = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div className='home'>
            <HeroCarousel/>
            <div className="links__box">
            <div className='links__box__info'>
                    <h3>
                        Klinikamizga Xush kelibsiz! 
                    </h3>
                    <h4>
                     Sizning sog`lig`ingiz - bizning vazifamiz!
                    </h4>
                    <p>
                    MediX - sizning sog'lig'ingizga doimiy e'tibor beradigan, professional tibbiy xizmatlar markazi. Bizning klinikamizda zamonaviy texnologiyalar va yuqori malakali mutaxassislar yordamida sifatli tibbiy xizmat ko'rsatiladi.
                    </p>
                </div>
                <div className='links__box__list'>
                <button>
                    <img src={appointment} alt="" />
                    <Link className='links__box__list__txt' to="/appointment">Qabulga yozilish</Link >
                </button>
                <button>
                    <img src={findDoc} alt="" />
                    <Link className='links__box__list__txt' to="/doctors">Doktorlarni izlash</Link >
                </button>
                <button>
                    <img src={location} alt="" />
                    <Link className='links__box__list__txt' to="/contact">Bizning manzil!</Link >
                </button>
                <button>
                    <img src={call} alt="" />
                    <a href="tel:+998783330303">Favqulotda yordam liniyasi</a>
                </button>
                </div>
                
                <div className='links__box__img'>
                    <img src={doc} alt="" />
                </div>
            </div>
           <div className="commit__box">
                <p className='commit__box__subtitle'>Fikrlar</p>
                <h2 className='commit__box__title'>Mijozlar biz haqimizda nima deydi!</h2>
                <Myslider/>
            </div>
           <div className='otziv'>
                <p className='otziv__subtitle'>Fikr-mulohazalaringizni biz bilan baham ko'ring</p>
                <h2 className='otziv__title'>Xizmatlarimiz haqida o'z fikr va takliflaringizni qoldiring, bu biz uchun muhim!</h2>
                <div className="otziv__box">
                        <div className='otziv__box__info'>
                                {/* <p className='otziv__box__info__subtitle'>otziv A SEAT<span className='otziv__box__info__subtitle__span'></span></p>
                                <h2 className='otziv__box__info__title'>otziv A Seat For Your Kid</h2>
                                <p className='otziv__box__info__txt'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p> */}
                                <img src={otziv} alt="" />
                        </div>
                        <div className="otziv__box__container">
                            <h1 className='otziv__box__container__title'>
                                Servisimiz uchun fikr bildiring!
                            </h1>
                            <form className='otziv__box__container__form' action="">
                                <input className='otziv__box__container__form__input' type="text" name="" id="otziv" required placeholder='Ismingiz' />
                                <input className='otziv__box__container__form__input' type="email" name="" id="" required placeholder='Email pochtangiz' />
                                <select className='otziv__box__container__form__input' name="" id="" required placeholder='Select a class'>
                                    <option className='otziv__box__container__form__option' value="">qaysi servisdan foydalandingiz</option>
                                    <option className='otziv__box__container__form__option' value="">Ko`z</option>
                                    <option className='otziv__box__container__form__option' value="">Ortopediya</option>
                                    <option className='otziv__box__container__form__option' value="">Stamatologiya</option>
                                    <option className='otziv__box__container__form__option' value="">Gnikologiya</option>
                                    <option className='otziv__box__container__form__option' value="">Kardiologiya</option>
                                    <option className='otziv__box__container__form__option' value="">Nevrologiya</option>
                                    <option className='otziv__box__container__form__option' value="">Gastroenterologiya</option>
                                    <option className='otziv__box__container__form__option' value="">Umumiy amaliyot</option>
                                </select>
                                <textarea className='otziv__box__container__form__input' name="" id="" placeholder='Fikr va takliflaringizni yozing!'></textarea>
                            <button className='otziv__box__container__form__btn'>Fikr bildirish!</button>
                            </form>
                        </div>
                </div>
           </div>
            {/* Scroll to Top Button */}
            <button
                className={`scrollToTop ${showScroll ? 'show' : ''}`}
                onClick={scrollToTop}
            >
                ↑
            </button>
        </div>
    );
}

export default Home;
