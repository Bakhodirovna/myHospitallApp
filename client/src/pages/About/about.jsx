import React, { useState } from 'react';
import styles from './about.scss';
import {Link, NavLink} from 'react-router-dom'
import img1 from '../images/img1.jpg'
import section2_1 from '../images/section2.webp'
import section2_2 from '../images/section2.1.webp'
import section2_3 from '../images/section2.2.webp'
import section2_4 from '../images/section2.3.webp'

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="accordion-item">
        <button className="accordion-title" onClick={toggle}>
          {title}
          <span className={isOpen ? 'icon rotate' : 'icon'}>▼</span>
        </button>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };
const About = () => {
    return (
        <div className='about'>
           <div className="about__top">
                <div className="about__top__txt">
                <h1 className='about__top__title'>
                    Biz haqimizda
                </h1>
                <div className='about__top__title__links'>
                    <Link to="/"  className="about__top__title__links__link">Asosiy  </Link >
                    <p className="about__top__title__links__link"> / Biz haqimizda</p>
                </div>
                </div>
                
            </div>
            <div className="about__box">
                <div className="about__box__section1">
                    <div className="about__box__section1__left">
                        <img src={img1} alt="" />
                    </div>
                    <div className="about__box__section1__right">
                    <h2 className='about__box__section1__title2'>
                        Bizning MediX klinikamizga hush kelibsiz!
                    </h2>
                    <p className='about__box__section1__desc2'> MediX klinikasi 2005-yilda tashkil etilgan bo'lib, bizning asosiy maqsadimiz mijozlarga eng yuqori sifatli tibbiy xizmatlarni taqdim etishdir. Klinikamiz, sog'liqni saqlash sohasidagi eng yangi texnologiyalarni qo'llagan holda, bemorlarimizga keng ko'lamli tibbiy yordam berishga qodir. Bizning asosiy vazifamiz har bir bemorga individual yondashuv orqali ularning sog'lig'ini yaxshilash va ularning hayot sifatini oshirishdir. Shu bilan birga, biz jamoatchilikni sog'lom turmush tarzi va kasalliklarni oldini olish bo'yicha bilimlar bilan ta'minlashga katta e'tibor qaratamiz. MediX klinikasi o'z faoliyati davomida ko'plab ilmiy-tadqiqot ishlarini amalga oshirgan va ko'plab yirik xalqaro hamkorliklarga qo'l urgan. Bizning maqsadimiz - ilg'or tibbiy texnologiyalar va yuqori malakali mutaxassislar yordamida bemorlarimizga eng yaxshi tibbiy xizmatni taqdim etishdir.
                    </p>
                    </div>
                </div>
                <div className='about__box__section2'>
                    <div className='about__box__section2__left'>
                        <h2>
                            Nimaga bizni tanlashadi?
                        </h2>
                        <div>
                            <div className='about__box__section2__left__txt'>
                                <h4>
                                    Yuqori sifatli xizmat
                                </h4>
                                <div >
                                    <p>
                                    Bizning klinikamiz zamonaviy texnologiyalarni qo'llagan holda, har bir bemorga shaxsiy yondashuv orqali yuqori sifatli tibbiy xizmatlar taqdim etadi.
                                    </p>
                                </div>
                            </div>
                            <div className='about__box__section2__left__txt'>
                                <h4>
                                    Tajribali mutaxassislar
                                </h4>
                                <div>
                                    <p>Jamoamizda faqat yuqori malakali va tajribali shifokorlar ishlaydi, ularning har biri o'z sohasida chuqur bilimga ega.</p>
                                </div>
                            </div>
                            <div className='about__box__section2__left__txt'>
                                <h4>
                                    Zamonaviy texnologiyalar
                                </h4>
                                <div>
                                    <p> Klinikamiz eng so'nggi tibbiy asbob-uskunalar va texnologiyalar bilan jihozlangan, bu esa eng murakkab tibbiy muolajalarni ham yuqori darajada bajarish imkonini beradi.</p>
                                </div>
                            </div>
                            <div className='about__box__section2__left__txt'>
                                <h4>
                                    Bemorlarga e'tibor va g`amxo'rlik
                                </h4>
                                <div>
                                    <p>
                                    Biz har bir bemorga g'amxo'rlik qilishni va ularning sog'lig'ini yaxshilashga yordam berishni o'zimizning asosiy vazifamiz deb bilamiz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about__box__section2__right'>
                        <img src={section2_1} alt="" />
                        <img src={section2_2} alt="" />
                        <img src={section2_3} alt="" />
                        <img src={section2_4} alt="" />
                    </div>
                </div>
                {/* <div className="accordion">
                    <AccordionItem title="We are always careful to our patient and service">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </AccordionItem>
                    <AccordionItem title="Book and appointment with any specialist anytime">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </AccordionItem>
                    <AccordionItem title="We offer lot of service in a best price">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </AccordionItem>
                    <AccordionItem title="Online payment system with different method">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </AccordionItem>
                </div> */}
                {/* <div className="about__box__section2">

                <ul className='about__box__section2__list'>
                    <li className='about__box__section2__info'>
                        <img className='about__box__section2__info__img' src={icon1} alt=""  />
                        <div className='about__box__section2__info__desc'>
                            <h3 className='about__box__section2__info__title'>Play Ground</h3>
                            <p className='about__box__section2__info__txt'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                        </div>
                    </li>
                    <li className='about__box__section2__info'>
                        <img className='about__box__section2__info__img' src={icon2} alt="" />
                        <div className='about__box__section2__info__desc'>
                            <h3 className='about__box__section2__info__title'>Music and Dance</h3>
                            <p className='about__box__section2__info__txt'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                        </div>
                    </li>
                    <li className='about__box__section2__info'>
                        <img className='about__box__section2__info__img' src={icon3} alt="" />
                        <div className='about__box__section2__info__desc'>
                            <h3 className='about__box__section2__info__title'>Arts and Crafts</h3>
                            <p className='about__box__section2__info__txt'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                        </div>
                    </li>
                    <li className='about__box__section2__info'>
                        <img className='about__box__section2__info__img' src={icon4} alt="" />
                        <div className='about__box__section2__info__desc'>
                            <h3 className='about__box__section2__info__title'>Safe Transportation</h3>
                            <p className='about__box__section2__info__txt'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                        </div>
                    </li>
                    <li className='about__box__section2__info'>
                        <img className='about__box__section2__info__img' src={icon5} alt="" />
                        <div className='about__box__section2__info__desc'>
                            <h3 className='about__box__section2__info__title'>Healthy food</h3>
                            <p className='about__box__section2__info__txt'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                        </div>
                    </li>
                    <li className='about__box__section2__info'>
                        <img className='about__box__section2__info__img' src={icon6} alt="" />
                        <div className='about__box__section2__info__desc'>
                            <h3 className='about__box__section2__info__title'>Educational Tour</h3>
                            <p className='about__box__section2__info__txt'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
                        </div>
                    </li>
                </ul>
            
                </div>
                <div className='about__box__section3'>
                <img className='about__box__section3__img' src={about1} alt="" />
                <div className='about__box__section3__info'>
                    <p className='about__box__section3__info__subtitle'>LEARN ABOUT US <span className='about__box__section3__info__subtitle__span'></span></p>
                    <h2 className='about__box__section3__info__title'>Best School For Your Kids</h2>
                    <p className='about__box__section3__info__txt'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <div className='about__box__section3__info__box'>
                        <img className='about__box__section3__info__box__img' src={about2} alt="" />
                        <ul className='about__box__section3__info__list'>
                            <li className='about__box__section3__info__list__item'>Labore eos amet dolor amet diam</li>
                            <li className='about__box__section3__info__list__item'>Etsea et sit dolor amet ipsum</li>
                            <li className='about__box__section3__info__list__item'>Diam dolor diam elitripsum vero.</li>
                        </ul>
                    </div>
                </div>
                </div> */}
                
            </div>
        </div>
    );
}

export default About;
