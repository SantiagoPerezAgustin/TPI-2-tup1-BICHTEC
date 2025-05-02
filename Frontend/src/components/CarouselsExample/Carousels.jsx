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
    },
    {
      text: "Venta De Celulares",
      subtitle: "Explorá nuestra colección de smartphones",
      buttonText: "Ver Celulares",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      text: "Muchas cosas más",
      subtitle: "Tecnología, accesorios y más",
      buttonText: "Más Productos",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
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
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <h3>{slide.text}</h3>
                  <p>{slide.subtitle}</p>
                  <Link to="/home">
                    <button
                      style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        backgroundColor: "#007bff",
                        border: "none",
                        color: "white",
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