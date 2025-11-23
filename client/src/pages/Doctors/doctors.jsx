import React, { useState, useEffect } from 'react';
import styles from './doctors.scss';
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios';


const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    const [specialization, setSpecialization] = useState('All');
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://localhost:6060/api/doctors');


        setDoctors(result.data);
      };
  
      fetchData();
    }, []);
  
    const filteredDoctors = specialization === 'Hammasi'
      ? doctors
      : doctors.filter(doc => doc.specialization === specialization);
  

    return (
        <div className='doctors'>
           <div className="doctors__top">
                <div className="doctors__top__txt">
                <h1 className='doctors__top__title'>
                    Bizning doktorlar
                </h1>
                
                <div className='doctors__top__title__links'>
                    <Link to="/"  className="doctors__top__title__links__link">Asosiy  </Link >
                    <p className="doctors__top__title__links__link"> / Doktorlar</p>
                </div>
                </div>
                
            </div>
            <div className='doctors__bottom'>
                <h2 className='doctors__bottom__title'>
                  Bizning doktorlar bilan tanishing!
                </h2>
                <div className="doctors__bottom__filter__buttons">
                  {['Hammasi', 'Stomatologiya', 'Ko`z doktori', 'Ginekologiya', 'Kardiologiya', 'Ortopediya', 'Gastroenterologiya', 'Nevrologiya', 'Umumiy amaliyot'].map(spec => (
                    <button key={spec} onClick={() => setSpecialization(spec)}>
                      {spec}
                    </button>
                  ))}
                </div>
                <div className="doctors__bottom__container">
                  {filteredDoctors.map(doctor => (
                    <div key={doctor._id} className="doctors__bottom__container__card">
                      <img src={doctor.imageUrl} alt={doctor.name} />
                      <h3>{doctor.name}</h3>
                      <p className='doctors__bottom__container__card__txt1'>{doctor.specialization}</p>
                      <div className='doctors__bottom__container__card__hours'>
                      <p className='doctors__bottom__container__card__txt2'>{doctor.availableDays.split('-').map(day => day.slice(0, 4)).join(' - ')}</p>
                      <p className='doctors__bottom__container__card__txt3'>{doctor.workingHours}</p>
                      </div>
                      <button onClick={() => window.location = `/doctors/${doctor._id}`}>Batafsil</button>
                    </div>
                  ))}
                </div>
                <div className="doctors__bottom__img">
                </div>
            </div>
        </div>
    );
}

export default Doctors;
