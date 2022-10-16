import React from 'react';
import Banner from '../../components/Banner/Banner';
import './Home.style.css';
import data from '../../db.json';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* Banner */}
            <Banner
                backgroundImage={'https://i.imgur.com/La18naI.png'}
                bannerText="Chez Vous, partout et ailleurs"
            />
            {/* Cards */}
            <div className="cardsSection">
                {data.map((data) => (
                    <Link key={data.id} className={'linkToCard'} to={`/appartment/${data.id}`}>
                        <Card cardTitle={data.title} cardImage={data.cover} />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Home;
