import React from 'react';
import logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <img className="logo" src={logo} alt={'logo'} />
            <nav>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/infos'}>A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
