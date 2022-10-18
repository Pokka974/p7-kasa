import { useEffect, useState } from 'react';
import { CarouselProps } from './Carousel';
export const useCarousel = (props: CarouselProps) => {
    const [displayArrows] = useState<boolean>(props.pictures.length > 1);
    const [picIndex, setPicIndex] = useState<number>(-1);
    const [picUrl, setPicUrl] = useState<string>();

    useEffect(() => {
        setPicIndex(0);
    }, []);

    useEffect(() => {
        setPicUrl(props.pictures[picIndex]);
    }, [picIndex]);

    const nextPicture = () => {
        if (picIndex === props.pictures.length - 1) {
            setPicIndex(0);
        } else {
            setPicIndex(picIndex + 1);
        }
    };

    const previousPicture = () => {
        if (picIndex === 0) {
            setPicIndex(props.pictures.length - 1);
        } else {
            setPicIndex(picIndex - 1);
        }
    };

    return {
        ...props,
        displayArrows,
        nextPicture,
        picUrl,
        previousPicture,
    };
};
