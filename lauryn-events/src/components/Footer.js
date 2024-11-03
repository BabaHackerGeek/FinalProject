import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Lauryn & Co. Prestige Events - All Rights Reserved</p>
    
    <div className="social-links">
      <a 
        href="https://www.instagram.com/lauryn_abkz?igsh=NWM4MmxzYmtweXF4" 
        target="_blank" 
        tite="Follow us on Instagram"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      
      <a 
        href="https://www.youtube.com/" 
        target="_blank" 
        tite="Follow us on Youtube"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </a>
    </div>
    
    <div className="footer-links">
      <a href="/legal-conditions">Legal Conditions & Terms</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
    
    <p>Website made by Baroukh Abadi</p>
  </footer>
);

export default Footer;
