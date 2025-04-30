import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">BICHTEC 📱</div>
        <div className="footer-description">Descripcion</div>
        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} BICHTEC. Todos los derechos
          reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
