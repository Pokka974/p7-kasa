import { CardProps } from './Card';

export const useCard = (props: CardProps) => {
    return {
        ...props,
    };
};
