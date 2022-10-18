import React from 'react';
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';
import { useCarousel } from './Carousel.hook';
import './Carousel.style.css';

export interface CarouselProps {
    pictures: string[];
}
const Carousel = (props: CarouselProps) => {
    const h = useCarousel(props);
    return (
        <div className="carouselContainer">
            <img
                onClick={() => h.nextPicture()}
                className="arrowLeft"
                src={ArrowLeft}
                alt="Arrow Left"
            />
            {h.picUrl && (
                <img className="displayedImage" src={h.picUrl} alt="displayed image in carousel" />
            )}
            <img
                onClick={() => h.previousPicture()}
                className="arrowRight"
                src={ArrowRight}
                alt="Arrow Right"
            />
        </div>
    );
};

export default Carousel;
