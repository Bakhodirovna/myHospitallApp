// import React from 'react';
// import styles from './services.scss';
// import {Link, NavLink} from 'react-router-dom'

// const Services = () => {
//     return (
//         <div className='services'>
//            <div className="services__top">
//                 <div className="services__top__txt">
//                 <h1 className='services__top__title'>
//                     Bizning servislar
//                 </h1>
//                 <div className='services__top__title__links'>
//                     <Link to="/"  className="services__top__title__links__link">Home  </Link >
//                     <p className="services__top__title__links__link"> / Bizning servislar</p>
//                 </div>
//                 </div>
            
//             </div>
//         </div>
//     );
// }

// export default Services;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './services.scss';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const result = await axios.get('http://localhost:6060/api/services');
      setServices(result.data);
      setSelectedService(result.data[0]); // Birinchi xizmatni tanlash
    };

    fetchServices();
  }, []);

  const renderServiceDetails = () => {
    if (!selectedService) return <div>Loading...</div>;
    return (
      <div className="services__content__info__details">
        <img src={selectedService.image} alt={selectedService.name} />
        {/* <img src="https://www.radiustheme.com/demo/html/medilink/medilink/img/department/department24.jpg" alt="" srcset="" /> */}
        <div className='services__content__info__details__txt'>
            <h2>{selectedService.name}</h2>
            <p className='services__content__info__details__txt__desc'>{selectedService.description}</p>
            <h3>Afzalliklari:</h3>
            <ul>
            {selectedService.advantages.map((adv, index) => (
                <li key={index}>{adv}</li>
            ))}
            </ul>
            <h3>Narxlarimiz:</h3>
            <div className='services__content__info__details__txt__box'>
                <div className='services__content__info__details__txt__service'>
                {selectedService.pricing.map((price, index) => (
                    <p key={index}>{price.service}:</p>
                ))}
                </div>
                <div className='services__content__info__details__txt__price'>
                {selectedService.pricing.map((price, index) => (
                    <p key={index}> {price.price}</p>
                ))}
                </div>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className='services'>
      <div className="services__top">
        <div className="services__top__txt">
          <h1 className='services__top__title'>
            Bizning servislar
          </h1>
          <div className='services__top__title__links'>
            <Link to="/" className="services__top__title__links__link">Asosiy</Link >
            <p className="services__top__title__links__link"> / Bizning servislar</p>
          </div>
        </div>
      </div>
      <div className="services__content">
            <div className='services__content__left'>
                <h3 className='services__content__left__title'>Barcha servislar</h3>
                <div className="services__content__left__menu">
                    {services.map(service => (
                        <button className='services__btn' key={service._id} onClick={() => setSelectedService(service)}>
                        {service.name} 
                        </button>
                    ))}
                </div>
                <h3 className='services__content__left__title'>Ishlash vaqti</h3>
                <div className="services__content__left__hours">
                    <p>Dushanba - Shanba:</p><p >08:00 - 22:00</p>
                     
                </div>
                <div className="services__content__left__form">
                     <h3 className='services__content__left__title'>Qabulga yozilish</h3>
                     <form>
                            <select id="department" required>
                                <option value="">Bo'limni tanlang</option>
                                <option value="cardiology">Kardiologiya</option>
                                <option value="orthopedics">Ortopediya</option>
                                <option value="neurology">Nevrologiya</option>
                                <option value="stomatology">Stomatologiya</option>
                                {/* Qo'shimcha variantlar */}
                            </select>
                        
                            <select id="doctor" required>
                                <option value="">Doktorni tanlang</option>
                                <option value="doctor1">Dr. Aliya Zokirova</option>
                                <option value="doctor2">Dr. Bekzod Karimov</option>
                                <option value="doctor3">Dr. Dilnoza Akramova</option>
                                {/* Qo'shimcha variantlar */}
                            </select>
                        
                            
                            <input type="text" id="name" required placeholder='F.I.O' />
                                                    
                             <input type="text" id="phone" required placeholder='Telefon' />
                           
                                <input type="email" id="email" required placeholder='Email' />
                        
                            
                                <input type="date" id="date" required />
                                <input type="time" id="time" required />
                    
                        
                            
                            <textarea id="note" rows="3" placeholder='Izoh'></textarea>
                        
                        <button type="submit" className="btn">Qabulga yozilish</button>
                    </form>
                </div>
            </div>
            <div className="services__content__info">
            {renderServiceDetails()}
            </div>
      </div>
    </div>
  );
}

export default Services;

