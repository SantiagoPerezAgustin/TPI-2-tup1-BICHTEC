import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../components/CarouselsExample/ExampleCarouselImage";

function Carousels(){
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Carousel style={{ height: "100%" }}>
          <Carousel.Item style={{ height: "100%" }}>
            <ExampleCarouselImage text="Bichtec" />
            <Carousel.Caption>
              <h3>El Mejor lugar para comprar tecnología</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100%" }}>
            <ExampleCarouselImage text="Ventas de Celulares" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100%" }}>
            <ExampleCarouselImage text="Muchas cosas mas" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}



export default Carousels;