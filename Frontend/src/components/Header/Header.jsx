import { Link, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ColorSchemesExample() {
  const { usuario, logout, rol } = useContext(AuthContext);

  console.log("Pruebaa", usuario);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Sesión cerrada con éxito");
  };

  const handleCarritoClick = (e) => {
    if (!usuario) {
      e.preventDefault();
      toast.error("Debes iniciar sesión para comprar.");
      navigate("/login");
    }
  };

  console.log("ROL EN HEADER:", rol);
  return (
    <>
      <nav className="navbar header-fixed navbar-expand-lg custom-navbar-bg">
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
              {rol === "admin" && (
                <li className="nav-item mx-3 text-nowrap">
                  <Link
                    className="nav-link nav-link-hover text-white fw-bold"
                    to="/admin"
                  >
                    Panel de Administración
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex align-items-center mx-3 gap-3">
              {usuario && rol === "user" && (
                <Link
                  to="/perfil"
                  className="usuario-header px-3 py-1 me-3 text-decoration-none"
                  style={{
                    background:
                      "linear-gradient(90deg, #FFD700 60%, #fffbe6 100%)",
                    color: "#222",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    border: "1px solid #FFD700",
                    letterSpacing: "0.5px",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <i
                    className="bi bi-person-circle"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  {usuario.nombre}
                </Link>
              )}
              {usuario && rol === "admin" && (
                <Link
                  to="/perfil"
                  className="usuario-header px-3 py-1 me-3 text-decoration-none"
                  style={{
                    background:
                      "linear-gradient(90deg,rgb(27, 134, 216) 60%, #fffbe6 100%)",
                    color: "#222",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    border: "1px solidrgb(255, 255, 255)",
                    letterSpacing: "0.5px",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <i
                    className="bi bi-person-circle"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  {usuario.nombre}
                </Link>
              )}
              <Link
                to="/carrito"
                onClick={handleCarritoClick}
                className="nav-link text-white position-relative"
              >
                <i className="bi bi-cart-fill fs-4"></i>
                {/* Badge opcional */}
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.6rem" }}
                ></span>
              </Link>
              {usuario ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary text-nowrap"
                >
                  Cerrar Sesión ❌​
                </button>
              ) : (
                <Link
                  className="btn btn-outline-warning text-white text-nowrap"
                  to="/login"
                >
                  Iniciar Sesión 🔐
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
