import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand me-3" href="#">
            BICHTEC 📱
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
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Sobre nosotros
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <a className="nav-link text-nowrap" href="/login">
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
