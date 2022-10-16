import { useState } from 'react';
import { CollapseProps } from './Collapse';

export const useCollapse = (props: CollapseProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return {
        ...props,
        isOpen,
        setIsOpen,
    };
};
