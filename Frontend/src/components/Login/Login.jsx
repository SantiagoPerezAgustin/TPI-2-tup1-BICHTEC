import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ onSubmit, errores, refs }) => {
  const [formData, setFormData] = useState({
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
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} noValidate>
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
          <div className="mt-3">
            <Link to="/register">¿No tienes cuenta? Registrarse</Link>
          </div>
          <button type="submit" className="btn btn-warning">
            Entrar
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
