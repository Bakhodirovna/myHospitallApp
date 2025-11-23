import React, { useEffect, useRef } from 'react';
import styles from './contact.scss';
import { Link } from 'react-router-dom';

const Contact = () => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        console.log("Contact component mounted or updated");
        const ymaps = window.ymaps;

        ymaps.ready(init);

        function init() {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
            }

            mapInstanceRef.current = new ymaps.Map(mapContainerRef.current, {
                center: [41.2995, 69.2401], // Toshkent koordinatalari
                zoom: 12
            });

            const myPlacemark = new ymaps.Placemark([41.2995, 69.2401], {
                hintContent: 'Toshkent davlat milliy universiteti',
                balloonContent: 'Toshkent davlat milliy universiteti'
            });

            mapInstanceRef.current.geoObjects.add(myPlacemark);

            const routeButton = new ymaps.control.RouteButton({
                options: { 
                    size: 'large'
                }
            });

            mapInstanceRef.current.controls.add(routeButton);

            routeButton.routePanel.geolocate('from');

            routeButton.routePanel.state.set({
                type: 'auto',
                fromEnabled: true,
                from: '',
                toEnabled: true,
                to: 'Toshkent davlat milliy universiteti'
            });
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className='contact'>
            <div className="contact__top">
                <div className="contact__top__txt">
                    <h1 className='contact__top__title'>
                        Kontakt
                    </h1>
                    <div className='contact__top__title__links'>
                        <Link to="/" className="contact__top__title__links__link">Asosiy  </Link>
                        <p className="contact__top__title__links__link"> / Kontakt</p>
                    </div>
                </div>
            </div>
            <div className="contact__box">
                <p className='contact__box__subtitle'>Aloqa uchun</p>
                <h2 className='contact__box__title'>Har qanday savol bilan bizga bog'laning</h2>
                <div className="contact__box__info">
                    <form action="" className="contact__box__info__form">
                        <input className='contact__box__info__form__input' required type="text" placeholder='Sizning ismingiz' />
                        <input className='contact__box__info__form__input' required type="email" placeholder='Sizning Email pochtangiz' />
                        <input className='contact__box__info__form__input' required type="text" placeholder='Mavzu' />
                        <textarea className='contact__box__info__form__input' required placeholder='Xabar' name="" id="" cols="28" rows="10"></textarea>
                        <button className='contact__box__info__form__btn'>Xabar yuborish</button>
                    </form>
                    <div className='contact__box__info__right'>
                        <p className="contact__box__info__right__txt">
                            MediX klinikasi bilan bog'lanish oson. Sizga ma'lumot yoki maslahat kerak bo'lsa, marhamat qilib biz bilan quyidagi telefon raqami, email orqali yoki to'g'ridan-to'g'ri bizning manzilimizga tashrif buyurib bog'lanishingiz mumkin. Sizning qulayligingiz uchun biz haftaning 6 kuni, ertalabdan kechgacha xizmat ko'rsatamiz. Sog'lig'ingiz biz uchun muhim, shuning uchun har qanday savol yoki muammolaringizda yordam berishdan mamnunmiz.
                        </p>
                        <ul className='contact__box__info__right__links'>
                            <li className='contact__box__info__right__link'>Manzil<address className='contact__box__info__right__link__txt'>Toshkent shahri Shayhontohur tumani, Labzak ko`chasi` 70, 100128, Uzbekistan</address></li>
                            <li className='contact__box__info__right__link'>Email<a className='contact__box__info__right__link__txt' href="mailto:medix@website.com">medix@website.com</a></li>
                            <li className='contact__box__info__right__link'>Telefon<a className='contact__box__info__right__link__txt' href="tel:+99878-333-03-03">(+998) 78-333-03-03</a></li>
                            <li className='contact__box__info__right__link'>Ish vaqti <span className='contact__box__info__right__link__week'>Dushanba - Shanba:</span><span className='contact__box__info__right__link__time'>08:00 - 22:00</span></li>
                        </ul>
                    </div>
                </div>
                <div className='contact__box__map' ref={mapContainerRef} style={{ width: '100%', height: '450px' }}></div>
            </div>
        </div>
    );
}

export default Contact;
