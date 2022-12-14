import React from 'react';
import Banner from '../../components/Banner/Banner';
import './Home.style.css';
import data from '../../db.json';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            {/* Banner */}
            <Banner
                backgroundImage={'https://i.imgur.com/La18naI.png'}
                bannerText="Chez vous, partout et ailleurs"
                heightScale={111}
            />
            {/* Cards */}
            <div className="cardsSection">
                {data.map((data) => (
                    <Link key={data.id} className={'linkToCard'} to={`/appartment/${data.id}`}>
                        <Card cardTitle={data.title} cardImage={data.cover} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
