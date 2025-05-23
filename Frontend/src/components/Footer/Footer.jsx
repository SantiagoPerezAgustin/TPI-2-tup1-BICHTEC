import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title" style={{
              fontWeight: "bold",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              background: "linear-gradient(90deg, #FFD700 40%, #40A9FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 8px rgba(0,0,0,0.18), 0 2px 0 #fffbe6",
              padding: "0.2em 0.6em",
              borderRadius: "12px",
              textTransform: "uppercase",
              boxShadow: "0 2px 12px rgba(255,215,0,0.12)",
              transition: "transform 0.2s",
            }}>BICHTEC 📱</div>
        <div className="footer-description">
          Combinanción de calidad, asesoramiento y precios competitivos.
        </div>
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/productos">Productos</a>
          <a href="/sobre-nosotros">Contacto</a>
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
