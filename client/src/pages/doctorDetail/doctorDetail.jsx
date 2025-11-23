import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './doctorDetail.scss';

import twitter from "./images/twitter.png";
import facebook from "./images/facebook-app-symbol.png";
import linkedin from "./images/linkedin (1).png";
import insta from "./images/instagram.png";

function DoctorDetail({ match }) {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

     useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const result = await axios(`http://localhost:6060/api/doctors/${id}`);

        setDoctor(result.data);
      } catch (error) {
        console.error('Doctor data fetching failed:', error);
      }
    };
        fetchDoctor();
    }, [id]);


    

    if (!doctor) return <div>Loading...</div>;

    return (
        <div className="doctors__profile">
            <div className="doctors__profile__top">
                <div className="doctors__profile__top__txt">
                <h1 className='doctors__profile__top__title'>
                {doctor.name} haqida batafsil
                </h1>
                <div className='doctors__profile__top__title__links'>
                    <Link to="/"  className="doctors__profile__top__title__links__link">Home  </Link >
                    <p className="doctors__profile__top__title__links__link"><Link to="/doctors"  className="doctors__profile__top__title__links__link">/ Doktorlar  </Link >  / {doctor.specialization}</p>
                </div>
                </div>
            </div>
            <div className='doctors__profile__box'>
            <div className="doctors__profile__left">
                <div className='doctors__profile__left__info'>
                    <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
                    <h2>{doctor.name}</h2>
                    <p>{doctor.specialization}</p>
                </div>
                <div className='doctors__profile__left__contact'>
                    <h2>Kontakt ma`lumotlar</h2>
                    <p>Telefon: <a href={doctor.personalInfo.phone}>{doctor.personalInfo.phone}</a></p>
                    <p>Email: <a href={doctor.personalInfo.email}>{doctor.personalInfo.email}</a></p>
                    <ul className='doctors__profile__left__contact__socials'>
                        
                     <li className='doctors__profile__left__contact__social'><a className='doctors__profile__left__contact__social__link' href={doctor.personalInfo.social.twitter} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a></li>
                     <li className='doctors__profile__left__contact__social'><a className='doctors__profile__left__contact__social__link' href={doctor.personalInfo.social.facebook} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a></li>
                     <li className='doctors__profile__left__contact__social'><a className='doctors__profile__left__contact__social__link' href={doctor.personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></li>
                     <li className='doctors__profile__left__contact__social'><a className='doctors__profile__left__contact__social__link' href={doctor.personalInfo.social.instagram} target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a></li>
                    </ul>
                    
                </div>
            </div>
            <div className="doctors__profile__right">
                <h2>Doktor haqida</h2>
                <p>{doctor.bio}Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-Phosfluorescently expedite impactful supply chains via focused results. Holistically . Compellingly supply just in time catalysts for change through..</p>
                <h2 className='h2'>Ta`lim:</h2>
                {doctor.education.map(edu => (
                    <div key={edu._id} >
                        <p>Yil<strong>{edu.year}</strong> </p>
                        <p>Daraja<strong>{edu.degree}</strong></p>
                        <p>Universitet<strong>{edu.institute}</strong> </p>

                    </div>
                ))}
                <h2 className='h2'>Tajriba:</h2>
                {doctor.experience.map(exp => (
                    <div key={exp._id} >
                        <p>Yil<strong>{exp.year}</strong> </p>
                        <p>Yo`nalish<strong>{exp.department}</strong> </p>
                        <p>Daraja<strong>{exp.position}</strong></p>
                        <p>Hospital<strong>{exp.hospital}</strong> </p>
                    </div>
                ))}
                <h2 className='h2'>Ish vaqti:</h2>
                <div>
                        <p>Kun<strong>{doctor.availableDays}</strong> </p>
                        <p>Soat<strong>{doctor.workingHours}</strong> </p>
                </div>
                <button onClick={() => window.location = `/appointment`}>Qabulga yozilish</button>
            </div>
            </div>
        </div>
    );
}

export default DoctorDetail;
