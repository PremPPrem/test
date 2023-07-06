import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import './Footer.scss'

function Footer() {
  return (
    <div className="head_footer">
      <footer className="footer">
   <div className="footer_item">
   <div className="footer_img">
        <img src="/Navbar_Logo.png" alt="Logo" className="footer_img" />
        </div>
    <div className="footer_list">
    <div className="item">
        <h2>RESOURCES</h2>
          <ul>
            <li>Flowbite</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="item">
        <h2>FOLLOW US</h2>
          <ul>
            <li>Github</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="item">
        <h2>LEGAL</h2>
          <ul>
            <li><a href="/Privacy">Privacy Policy</a></li>
            <li><a href="/Terms">Terms & Conditions</a></li>
          </ul>
        </div>
    </div>
   </div>
      </footer>
      <div className="footer_under">
        <p>©2023 Flowbite<sup>TM</sup>. All Right Reserved</p>
        <ul>
          <li>
            <a href="/"><FaFacebook className="footer_icon" /></a>
            <a href="/"><FaInstagram className="footer_icon" /></a>
            <a href="/"><FaTwitter className="footer_icon" /></a>
            <a href="/"><FaGithub  className="footer_icon"/></a>
            <a href="/"><BiBasketball className="footer_icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
