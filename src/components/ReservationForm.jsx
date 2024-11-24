import React, { useState } from "react";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "standard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración de ePayco
    const handler = window.ePayco.checkout.configure({
      key: "2a5742317f0bca04fecbeb0d887bf25d", // Reemplaza con tu clave pública de ePayco
      test: true, // Cambiar a false en producción
    });

    // Datos del pago
    const paymentData = {
      name: `Reserva ${formData.roomType}`,
      description: `Habitación ${formData.roomType}`,
      invoice: "12345", // Puedes generar un ID único para cada reserva
      currency: "COP",
      amount: 200000, // Ajusta según el tipo de habitación
      tax_base: "0", // Base imponible (si aplica)
      tax: "0", // Impuesto (si aplica)
      country: "CO",
      lang: "es",
      external: "false",
      extra1: formData.firstName,
      extra2: formData.lastName,
      extra3: formData.phone,
      email_billing: formData.email,
      name_billing: formData.firstName,
      mobilephone_billing: formData.phone,
      // URL de retorno
      response: "https://hotel-laxuli-2zmw.vercel.app/responde",
      confirmation: "https://tu-backend.com/confirmacion-pago",
      method: "GET", // Método de respuesta
    };

    // Mostrar el formulario de pago de ePayco
    handler.open(paymentData);
  };

  return (
    <div className="reservation-form-container">
      <h1>Reserva tu habitación</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Número de teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkIn">Fecha de entrada:</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Fecha de salida:</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomType">Tipo de habitación:</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="standard">Estándar</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
            <option value="presidential">Presidencial</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">
          Realizar Reserva
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
