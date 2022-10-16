import React from 'react';
import { useBanner } from './Banner.hook';
import './Banner.style.css';

export interface BannerProps {
    backgroundImage: string;
    bannerText: string;
}
const Banner = (props: BannerProps) => {
    const h = useBanner(props);

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${h.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
            }}
            className="bannerContainer">
            <p className="bannerText">{h.bannerText}</p>
        </div>
    );
};

export default Banner;
