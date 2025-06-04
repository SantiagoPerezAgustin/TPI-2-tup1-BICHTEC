import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  const slides = [
    {
      text: "BICHTEC",
      subtitle: "El Mejor lugar para comprar tecnología",
      buttonText: "Conoce Mas Sobre Nosotros",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      link: "/sobre-nosotros", // Ruta para este botón
    },
    {
      text: "Venta De Celulares",
      subtitle: "Explorá nuestra colección de smartphones",
      buttonText: "Ver Celulares",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      link: "/productos", // Ruta para este botón
    },
    {
      text: "Muchas cosas más",
      subtitle: "Tecnología, accesorios y más",
      buttonText: "Más Productos",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "/productos", // Ruta para este botón
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Carousel style={{ height: "100%" }} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} style={{ height: "100%" }}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                position: "relative", 
              }}
            >
              
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", 
                  zIndex: 1, 
                }}
              ></div>

              
              <div
                style={{
                  position: "relative",
                  zIndex: 2, 
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                  padding: "20px",
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
                }}
              >
                <h3 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  {slide.text}
                </h3>
                <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <button
                    style={{
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      fontSize: "1rem",
                      backgroundColor: "#ffc107",
                      border: "none",
                      color: "black",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
