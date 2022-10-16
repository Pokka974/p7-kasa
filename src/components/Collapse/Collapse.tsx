import React from 'react';
import { useCollapse } from './Collapse.hook';
import './Collapse.style.css';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
export interface CollapseProps {
    title: string;
    content: string;
}
const Collapse = (props: CollapseProps) => {
    const h = useCollapse(props);

    return (
        <div className="collapseContainer">
            <div onClick={() => h.setIsOpen(!h.isOpen)} className="titleContainer">
                <p>{h.title}</p>
                {h.isOpen ? (
                    <img className="arrow" src={arrowUp} alt="arrow up" />
                ) : (
                    <img className="arrow" src={arrowDown} alt="arrow down" />
                )}
            </div>
            {h.isOpen && (
                <div className="contentContainer">
                    <p>{h.content}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
