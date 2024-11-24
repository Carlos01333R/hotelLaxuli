import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
    return (
        <div className="container">
            <h2>Galería</h2>
            <div className="gallery">
                <Link to="/reserve">
                    <img src="https://via.placeholder.com/400" alt="Habitación 1" />
                </Link>
                <Link to="/reserve">
                    <img src="https://via.placeholder.com/400" alt="Piscina" />
                </Link>
                <Link to="/reserve">
                    <img src="https://via.placeholder.com/400" alt="Comedor" />
                </Link>
                <Link to="/reserve">
                    <img src="https://via.placeholder.com/400" alt="Vista Exterior" />
                </Link>
            </div>
        </div>
    );
}

export default Gallery;
