import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import { useAppartment } from './Appartment.hook';
import './Appartment.style.css';
import StarRating from './StarRating/StarRating';

const Appartment = () => {
    const h = useAppartment();

    return (
        <div className="appartmentContainer">
            <Carousel pictures={h.appartment ? h.appartment.pictures : []} />
            <div className="infosSection">
                <div className="titleSection">
                    <h3>{h.appartment?.title}</h3>
                    <p>{h.appartment?.location}</p>
                    <ul>
                        {h.appartment?.tags &&
                            h.appartment?.tags.map((tag: string) => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
                <div className="ratingSection">
                    <div>
                        <StarRating score={h.appartment ? parseInt(h.appartment.rating) : 0} />
                    </div>
                    <div className="hostInfos">
                        <p>{h.appartment?.host.name}</p>
                        <img
                            className="profilePic"
                            src={h.appartment?.host.picture}
                            alt="host profile picture"
                        />
                    </div>
                </div>
            </div>
            <div className="descriptionContainer">
                <Collapse title="Description" content={h.appartment?.description} />
                <Collapse title="Équipements" contents={h.appartment?.equipments} />
            </div>
        </div>
    );
};

export default Appartment;
