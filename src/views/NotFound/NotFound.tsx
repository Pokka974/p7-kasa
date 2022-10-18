import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.style.css';

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <div className="notFoundText">
                <h2>404</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Oups! La page que vous demandez n'existe pas</p>
            </div>
            <div className="notFoundBack">
                <Link to={'/'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
