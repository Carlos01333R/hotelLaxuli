import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ReservationForm from './components/ReservationForm';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';  // Asegúrate de importar Reviews
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentDetails from './page/responde';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reserve" element={<ReservationForm />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/reviews" element={<Reviews />} /> {/* Ruta para reseñas */}
                <Route path="/responde" element={<PaymentDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
