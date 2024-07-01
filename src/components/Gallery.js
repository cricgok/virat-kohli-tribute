import React from 'react';
import v1 from '../assets/v12.jpg';
import v2 from '../assets/v14.jpg';
import v4 from '../assets/v3.jpg';
import v3 from '../assets/v13.jpg';
import v5 from '../assets/v4.jpg';
import v6 from '../assets/v5.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="images">
                <img src={v1} alt="Virat Kohli 1" />
                <img src={v2} alt="Virat Kohli 2" />
                <img src={v3} alt="Virat Kohli 3" />
                <img src={v4} alt="Virat Kohli 1" />
                <img src={v5} alt="Virat Kohli 2" />
                <img src={v6} alt="Virat Kohli 3" />
            </div>
        </section>
    );
};

export default Gallery;
