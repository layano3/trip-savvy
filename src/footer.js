import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer>
      <div className="footer-links">
        <Link to="/aboutUs">{language === 'en' ? 'About Us' : 'À propos de nous'}</Link>
        <Link to="/contactUs">{language === 'en' ? 'Contact Us' : 'Contactez-nous'}</Link>
        <Link to="/policyUs">{language === 'en' ? 'Policy' : 'Politique'}</Link>
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

