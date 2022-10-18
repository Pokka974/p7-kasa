import { useEffect, useState } from 'react';
import { StarRatingProps } from './StarRating';

export const useStarRating = (props: StarRatingProps) => {
    const [emptyStars, setEmptyStar] = useState<number>(0);
    const [rating, setRating] = useState<boolean[]>([]);

    useEffect(() => {
        setEmptyStar(5 - props.score);
    }, []);

    useEffect(() => {
        const temp = [];
        for (let i = 0; i < props.score; i++) {
            temp.push(true);
        }
        for (let j = 0; j < emptyStars; j++) {
            temp.push(false);
        }

        setRating(temp.slice(0, 5));
    }, [emptyStars]);

    return {
        ...props,
        emptyStars,
        rating,
    };
};
