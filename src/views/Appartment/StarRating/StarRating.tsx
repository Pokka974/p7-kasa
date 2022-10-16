import React from 'react';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';
import { useStarRating } from './StarRating.hook';

export interface StarRatingProps {
    score: number;
}
const StarRating = (props: StarRatingProps) => {
    const h = useStarRating(props);

    return (
        <>
            {h.rating &&
                h.emptyStars &&
                h.rating.map((rate: boolean, key: number) => {
                    if (rate) {
                        return <img key={key} src={starFilled} alt="filledStar" />;
                    } else {
                        return <img key={key} src={star} alt="star" />;
                    }
                })}
        </>
    );
};

export default StarRating;
