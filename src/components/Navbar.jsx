import React, { useState } from "react";
import { Link } from "react-router-dom";
import { US, DE, IT, JP } from "country-flag-icons/react/3x2";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => setToggle(!toggle);
    
  return (
    <div>
      <nav className="nav">
        <div className="navbar">
        <div className="navbar_left">
        <img
            src="/Navbar_logo.png"
            alt="navbar_logo"
            className="navbar_logo"
          />
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/Services">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/Pricing">
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <span>Contact</span>
              </Link>
            </li>
            </ul>
        </div>
             <div className="navbar_right">
             <div className="dropdown">
                <span className="language">
                  Language
       
                </span>
                <div className="dropdown-content">
                  <div className="grid grid-cols-auto">
                    <a href="/">
                      <US title="English" className="navbar_flag" />
                      <span>English (US)</span>
                    </a>

                    <a href="/">
                      <DE title="Deutsch" className="navbar_flag" />
                      <span>Deutsch</span>
                    </a>
                    <a href="/">
                      <IT title="Italiano" className="navbar_flag" />
                      <span>Italiano</span>
                    </a>

                    <a href="/">
                      <JP title="japan" className="navbar_flag" />
                      <span>日本語</span>
                    </a>
                  </div>
                </div>
                <div className="menu_icon" onClick={toggleMenu}>
                    {toggle ? <FaTimes /> : <FaBars />}
                </div>
              </div>
       
             </div>
        
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
