import React from 'react';
import './Footer.style.css';
import footerLogo from '../../assets/footer-logo.png';
const Footer = () => {
    return (
        <footer>
            <img src={footerLogo} alt="footer logo" />
            <p className="footerText">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
