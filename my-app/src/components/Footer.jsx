import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (<div className="footer-main">
    <footer className="footer">
      <ul className="footer-links">
      <div className="yyyy">
        <Link className="link3" to="/home"><SiHomeassistantcommunitystore /> Home </Link>
        <Link className="link3" to="/location"><FaLocationDot /> Location </Link>
        <Link className="link3" to="/contact"><IoMdContact /> Contact </Link>
        <Link className="link3" to="/about"><MdOutlineRoundaboutRight /> About</Link>
        </div>
       <div className="footer-pic">
        <p className="all-data"><b><FaPhoneVolume /> 9345818872</b>
          <b><MdEmail /> nammacafe@gmail.com</b>
          <li ><a href="https://www.instagram.com/cafecoffeeday?igsh=Z2J0NnhoNnNycjRw" target="_blank"style={{ textDecoration: 'none' }}><b><FaInstagram /> Instagram</b></a></li>
          <li><a href=" https://x.com/CafeCoffeeDay?t=Zlc0S4uoyKyDTDJvxZzzAg&s=08  " target="_blank"style={{ textDecoration: 'none' }}><b><FaTwitter /> Twitter</b></a></li>
          <li><a href=" https://m.facebook.com/cafecoffeeday/" target="_blank"style={{ textDecoration: 'none' }}><b><FaFacebook /> Facebook</b></a></li></p>
          <p><b className="copy">© 2025 Namma Cafe All Rights Reserved.</b> </p>
          </div>
          
      </ul>
    </footer>
  </div>
  );
};

export default Footer;
 