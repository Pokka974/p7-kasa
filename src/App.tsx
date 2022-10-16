import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Appartment from './views/Appartment/Appartment';
import Infos from './views/Infos/Infos';
import NotFound from './views/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.style.css';

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="appartment/:id" element={<Appartment />} />
                <Route path="infos" element={<Infos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
