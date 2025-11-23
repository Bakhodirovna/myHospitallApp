import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './home.scss';
import commit1 from '../images/commit1.jpg';
import commit2 from '../images/commit2.jpg';
import commit3 from '../images/commit3.jpg';
import commit4 from '../images/commit4.jpg';

const Myslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ position: 'relative', zIndex: '10' }}>
      <Slider {...settings} className='commit__box__list'>
        <div>
          <div className='slick-slide'>
            <div className='slick-current slick-active' style={{ marginLeft: '60px' }}>
              <div className='commit__box__list__item'>
                <p className='commit__box__list__item__text'>
                Men bu klinikadan juda mamnunman! Doktorlar har doim diqqatli va mehribon, ularning professional yondashuvi tufayli tezroq tuzalishim mumkin bo'ldi. Diagnostika xizmatidan foydalandim va natijalar juda aniq chiqdi. Barchaga tavsiya qilaman!
                </p>
                <div className='commit__box__list__item__info'>
                  {/* <img className='commit__box__list__item__img' src={commit1} alt='' /> */}
                  <div className='commit__box__list__item__info__box'>
                    <h3 className='commit__box__list__item__name'>Gulbahor M</h3>
                    <p className='commit__box__list__item__job'>Diagnostika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='slick-slide'>
            <div className='slick-current slick-active' style={{ marginLeft: '60px' }}>
              <div className='commit__box__list__item'>
                <p className='commit__box__list__item__text'>
                Men bu klinikaga bir necha marta murojat qildim va har safar terapiya va reabilitatsiya xizmatlaridan foydalandim. Shifokorlar va boshqa xodimlar har doim yordamga tayyor, ularning maslahatlari va davolash usullari tufayli sog'liqni tezroq tiklash mumkin. 
                </p>
                <div className='commit__box__list__item__info'>
                  {/* <img className='commit__box__list__item__img' src={commit2} alt='' /> */}
                  <div className='commit__box__list__item__info__box'>
                    <h3 className='commit__box__list__item__name'>Dilnoza</h3>
                    <p className='commit__box__list__item__job'> terapiya va reabilitatsiya </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='slick-slide'>
            <div className='slick-current slick-active' style={{ marginLeft: '60px' }}>
              <div className='commit__box__list__item'>
                <p className='commit__box__list__item__text'>
                Ko'z doktori xizmatidan juda ko'p foyda ko'rdim! Ko'z muolajasi va tekshiruvlaridan so'ng, ko'rishim ancha yaxshilandi. Shifokorlar juda malakali va e'tiborli, eng yangi uskunalardan foydalanishadi.  Bu yerda sizning ko'zingiz haqiqatan ham ishonchli qo'llarda!
                </p>
                <div className='commit__box__list__item__info'>
                  {/* <img className='commit__box__list__item__img' src={commit3} alt='' /> */}
                  <div className='commit__box__list__item__info__box'>
                    <h3 className='commit__box__list__item__name'> Jamila </h3>
                    <p className='commit__box__list__item__job'>Ko`z doktori</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='slick-slide'>
            <div className='slick-current slick-active' style={{ marginLeft: '60px' }}>
              <div className='commit__box__list__item'>
                <p className='commit__box__list__item__text'>
                Ginekologiya bo'limidagi shifokorlar juda e'tiborli va professional, Zarur barcha tekshiruvlar zamonaviy uskunalar yordamida tezkor va aniq amalga oshirildi. Har bir muammoimga yechim topildi. Ushbu klinikani barcha ayollarga tavsiya qilaman.
                </p>
                <div className='commit__box__list__item__info'>
                  {/* <img className='commit__box__list__item__img' src={commit4} alt='' /> */}
                  <div className='commit__box__list__item__info__box'>
                    <h3 className='commit__box__list__item__name'>Nargiza </h3>
                    <p className='commit__box__list__item__job'>Ginekologiya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Myslider;
