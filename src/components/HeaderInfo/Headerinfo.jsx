import { Link, NavLink } from "react-router-dom";
import React from 'react'
import './HeaderInfo.css'
function Headerinfo() {
  return (  
    <div className="headerinfodiv">
      <span>Project Laboratory</span>
      <h1>We make the <br /> best products</h1>
      <div className="btn-div">
          <NavLink to="/contact" className="btn active">Contacts us</NavLink>
          <NavLink to="/about" className="btn">About us</NavLink>
      </div>
    </div>
  )
}

export default Headerinfo