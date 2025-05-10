import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage.jsx";

function Carousels(){
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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "/productos", // Ruta para este botón
    },
  ];


    return (
  <div style={{ height: "100vh", width: "100vw" }}>
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
              position: "relative", // Necesario para la capa superpuesta
            }}
          >
            {/* Capa superpuesta para opacidad */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
                zIndex: 1, // Coloca esta capa detrás del texto
              }}
            ></div>

            {/* Contenedor del texto */}
            <div
              style={{
                position: "relative", // Asegura que el texto esté encima de la capa
                zIndex: 2, // Coloca el texto encima de la capa superpuesta
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                padding: "20px",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)", // Sombra para resaltar el texto
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