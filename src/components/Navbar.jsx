import React, { useState } from "react";
import logoimg from '../assets/morrov.png'
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav>
        <Link to="/" className="title">
          <img src={logoimg} alt="" />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Our projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li> 
          <li>
          <NavLink to="/contact" className="button">Contacts us</NavLink>
          </li>
        </ul>
      </nav>
  );
};
