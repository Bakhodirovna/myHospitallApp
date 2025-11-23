import React from 'react';
import { Link } from 'react-router-dom';
import styles from './appointment.scss';
import appointmentImg from '../images/appointmentImg.png'

const Appointment = () => {
    return (
        <div className='appointment'>
            <div className="appointment__top">
                <div className="appointment__top__txt">
                    <h1 className='appointment__top__title'>Qabulga yoziling</h1>
                    <div className='appointment__top__title__links'>
                        <Link to="/" className="appointment__top__title__links__link">Asosiy</Link>
                        <p className="appointment__top__title__links__link"> / Qabulga yozilish</p>
                    </div>
                </div>
            </div>
            <div className="appointment__form__container">
                <div className="appointment__form">
                    <h2>Qabulga yozilish</h2>
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
                        
                            
                            <div className='input_box'>
                                <input type="text" id="phone" required placeholder='Telefon' />
                                <input type="email" id="email" required placeholder='Email' />
                            </div>
                        
                            
                            <div className="input_box">
                                <input type="date" id="date" required />
                                <input type="time" id="time" required />
                            </div>
                        
                            
                            <textarea id="note" rows="3" placeholder='Izoh'></textarea>
                        
                        <button type="submit" className="btn">Qabulga yozilish</button>
                    </form>
                </div>
                
                    <img className="appointment__form__image" src={appointmentImg} alt="Doctor" />
                
            </div>
        </div>
    );
}

export default Appointment;
