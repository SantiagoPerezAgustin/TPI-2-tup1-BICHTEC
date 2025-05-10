import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <div
        className="text-black p-3"
        style={{
            width: "250px",
            height: "100%", // Ajusta la altura al contenedor padre
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            backgroundColor: "#1a1a1a", // Cambia el color de fondo aquí
            color: "black", // Cambia el color del texto para que sea legible
          }}
      >
        <h4 className="text-white">Menú</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow-1" style={{ padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
