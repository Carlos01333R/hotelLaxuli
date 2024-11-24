import React from "react";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import Reviews from "./Reviews";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    // Configuración del carrusel
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    // Función para redirigir a la página de reservas
    const goToReservation = () => {
        navigate("/reserve");
    };

    return (
        <div className="home-container">
            {/* Carrusel de imágenes */}
            <div className="carousel-container">
                <Slider {...carouselSettings}>
                    <div onClick={goToReservation}>
                        <img
                            src="https://via.placeholder.com/800x400?text=Habitación+Deluxe"
                            alt="Habitación Deluxe"
                        />
                    </div>
                    <div onClick={goToReservation}>
                        <img
                            src="https://via.placeholder.com/800x400?text=Piscina"
                            alt="Piscina"
                        />
                    </div>
                    <div onClick={goToReservation}>
                        <img
                            src="https://via.placeholder.com/800x400?text=Restaurante+Gourmet"
                            alt="Restaurante Gourmet"
                        />
                    </div>
                </Slider>
            </div>

            {/* Sección de reseñas */}
            <div className="reviews-section">
                <h2>Reseñas de Nuestros Huéspedes</h2>
                <Link to="/reviews">Ver todas las reseñas</Link>
            </div>

            {/* Sección interactiva con imagen y texto */}
            <div className="about-us-section">
                <div className="about-image">
                    <img
                        src="https://via.placeholder.com/800x400?text=Sobre+Nosotros"
                        alt="Sobre Nosotros"
                    />
                    <div className="about-text">
                        <h2>Conócenos Mejor</h2>
                        <p>
                            En nuestro hotel nos dedicamos a brindar una experiencia única,
                            donde cada huésped es tratado como parte de nuestra familia.
                            ¡Te esperamos para disfrutar de nuestros servicios exclusivos!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
