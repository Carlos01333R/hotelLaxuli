import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Hotel Laxuli</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" activeClassName="active">Galería</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reserve" activeClassName="active">Reservas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reviews" activeClassName="active">Reseñas</NavLink>
                    </li>
                    {/* Nuevo enlace */}
                    <li>
                        <NavLink to="/reservations" activeClassName="active">Lista de Reservas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
