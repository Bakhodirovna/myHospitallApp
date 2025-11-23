import React from 'react';
import styles from './news.scss';
import {Link, NavLink} from 'react-router-dom'

const News = () => {
    return (
        <div className='news'>
           <div className="news__top">
                <div className="news__top__txt">
                <h1 className='news__top__title'>
                    Yangilikalar
                </h1>
                <div className='news__top__title__links'>
                    <Link to="/"  className="news__top__title__links__link">Asosiy  </Link >
                    <p className="news__top__title__links__link"> / Yangilikalar</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default News;
