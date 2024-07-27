import React from 'react'
import { Link, NavLink } from "react-router-dom";
import telegramicon from '../../assets/telegram.png'
import logo from '../../assets/morrov.png'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-div'>
            <div className='left'>
                <img src={logo} alt="" /> <br />
                <span className='footer-span'>Project Laboratory</span> <br />
                <p className='footer-p'>© 2024. All rights reserved</p><br />
            </div>
            <div className='right'>
                <span className='footer-right-span'>
                    IE Gang bang
                </span> <br />
                <NavLink to="https://t.me/vvLABvv">
                <img className='footer-img' src={telegramicon} alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default Footer