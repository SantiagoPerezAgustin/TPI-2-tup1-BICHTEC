import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function ColorSchemesExample() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar-bg">
        <div className="container-fluid">
          <Link className="navbar-brand text-white me-3" to="/">
            BICHTEC
          </Link>
          <Link className="navbar-brand me-3" to="/">
            <img
              src="../../../Bichtec-Photoroom.png"
              alt="BICHTEC Logo"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-center w-100">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link nav-link-hover text-white fw-bold"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link nav-link-hover text-white fw-bold"
                  to="/productos"
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link nav-link-hover text-white fw-bold"
                  to="/sobre-nosotros"
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-warning text-white text-nowrap"
                  to="/login"
                >
                  Iniciar Sesión 🔐
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;