import Card from "react-bootstrap/Card";
import "./CartaSobreNosotros.css";

function CartaSobreNosotros() {
  return (
    <div className="sobre-nosotros-container">
      <Card className="carta-personalizada">
        <Card.Body>
          <Card.Title>Sobre Nosotros</Card.Title>
          <Card.Text>
            Somos <strong>BICHTEC 📱</strong>, una empresa apasionada por la
            tecnología móvil. Ofrecemos celulares de las marcas más confiables
            como iPhone, Samsung y Xiaomi, combinando calidad, asesoramiento y
            precios competitivos.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CartaSobreNosotros;
