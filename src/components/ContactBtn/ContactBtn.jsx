import nexticon from '../../assets/Arrow 1.png'
import React from 'react'
import './ContactBtn.css'
import { Link, NavLink } from "react-router-dom";


function ContactBtn() {
  return (
    <div className='Contact-div'>
        <h4>Write to us and get started</h4>
        <li className='li-clas'>
        <NavLink to="/contact" className="btn-contact">Contacts us</NavLink>
        </li>
    </div>
  )
}

export default ContactBtn