import React from 'react';
import { useCard } from './Card.hook';
import './Card.style.css';

export interface CardProps {
    cardTitle?: string;
    cardImage: string;
}
const Card = (props: CardProps) => {
    const h = useCard(props);

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${h.cardImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
            }}
            className="cardContainer">
            {h.cardTitle && <p className="cardTitle">{h.cardTitle}</p>}
        </div>
    );
};

export default Card;
