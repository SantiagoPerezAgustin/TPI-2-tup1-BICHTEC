import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SIDEBAR_WIDTH = 250;

const SideBar = ({ children }) => {
  return (
    <>
      {/* Sidebar fijo */}
      <div
        className="sidebar-fixed "
        style={{
          width: SIDEBAR_WIDTH,
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
          backgroundColor: "#1a1a1a",
          color: "black",
          zIndex: 100,
          padding: "24px 0 0 0",
        }}
      >
        <ul className="nav flex-column p-3 mt-5">
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

      {/* Contenido principal con margen izquierdo */}
      <div
        className="main-with-sidebar"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          minHeight: "100vh",
          padding: "20px",
          background: "#ececec",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default SideBar;