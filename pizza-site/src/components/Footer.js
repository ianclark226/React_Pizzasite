import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>

      </div>
      <p> &copy; 2022 ianpizza.com</p>
    </div>
  );
};

export default Footer;
