import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
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
        <br />
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Categorías
            </a>
          </li>
          <br />
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Marcas
            </a>
          </li>
          <br />
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Servicios
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
