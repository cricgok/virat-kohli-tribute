import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import CareerHighlights from './components/CareerHighlights';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Biography />
            <CareerHighlights />
            <Achievements />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
