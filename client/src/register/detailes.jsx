import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './detailes.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Detailes = () => {
    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }




    return (
        <div className='profile'>
             <div className="profile__top">
                <h1 className='profile__top__title'>
                Your profile 😎
                </h1>
            </div>
        </div>
    )
}


export default Detailes;
