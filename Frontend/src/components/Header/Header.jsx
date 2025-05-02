import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css"

function ColorSchemesExample() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar-bg">
        <div className="container-fluid">
          <a className="navbar-brand me-3" href="#">
            BICHTEC
          </a>
          <a className="navbar-brand me-3" href="#">
            <img
              src="../../../Bichtec-Photoroom.png"
              alt="BICHTEC Logo"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
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
                <a
                  className="nav-link nav-link-hover text-primary fw-bold"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link nav-link-hover text-success fw-bold"
                  href="#"
                >
                  Productos
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link nav-link-hover text-danger fw-bold"
                  href="#"
                >
                  Sobre nosotros
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <a
                  className="btn btn-primary text-white text-nowrap"
                  href="/login"
                >
                  Iniciar Sesión 🔐
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
