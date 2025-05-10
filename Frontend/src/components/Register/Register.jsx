import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ onSubmit, errores, refs }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              ref={refs.nombreRef}
            />
            {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              ref={refs.emailRef}
            />
            {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={handleChange}
              ref={refs.passwordRef}
            />
            {errores.password && (
              <p style={{ color: "red" }}>{errores.password}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              name="repeatPassword"
              className="form-control"
              id="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              ref={refs.repeatPasswordRef}
            />
            {errores.repeatPassword && (
              <p style={{ color: "red" }}>{errores.repeatPassword}</p>
            )}
          </div>
          <button type="submit" className="btn btn-warning">
            Registrarse
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/login")}
          >
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
