import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { US, DE, IT, JP } from "country-flag-icons/react/3x2";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import Select from "react-select";


function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const options = [
    { value: 'US', label: <div> <US title="English" className="navbar_flag" /><span>English (US)</span></div> },
    { value: 'DE', label: <div> <DE title="Deutsch" className="navbar_flag" /><span>Deutsch</span></div>},
    { value: 'IT', label: <div> <IT title="Italiano" className="navbar_flag" /><span>Italiano</span></div>},
    { value: 'JP', label: <div> <JP title="japan" className="navbar_flag" /><span>日本語</span></div> },
  ]

  return (
    <div>
      <nav className={colorChange ? "nav colorChange" : "nav"}>
        <div className={`${toggle ? "navbar expand" : "navbar"} ${colorChange ? "navbar colorChange" : "navbar"}`}>
          <div className="nav_left">
            <img
              src="/Navbar_logo.png"
              alt="navbar_logo"
              className="nav_logo"
            />
            <ul onClick={toggleMenu}>
              <li>
              <NavLink exact="true" className={({isActive})=> isActive ? "active" : ""} to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className={({isActive})=> isActive ? "active" : ""}>
                  <span>About</span>
                </NavLink>
              </li>
              <li>
              <NavLink to="/Services" className={({isActive})=> isActive ? "active" : ""}>
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
              <NavLink to="/Pricing" className={({isActive})=> isActive ? "active" : ""}>
                  <span>Pricing</span>
                </NavLink>
              </li>
              <li>
              <NavLink to="/Contact" className={({isActive})=> isActive ? "active" : ""}>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_right">
          <Select options={options}  defaultValue={options[0]} className="language"  />
            <div className="menu_icon" onClick={toggleMenu}>
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
