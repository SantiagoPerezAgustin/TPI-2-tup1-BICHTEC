import Card from "react-bootstrap/Card";
import './CartaSobreNosotros.css'

function BorderExample() {
  return (
    <>
      <Card
        className="carta-personalizada"
      >
        <Card.Header>Sobre Nosotros</Card.Header>
        <Card.Body>
          <Card.Title>Sobre Nosotros</Card.Title>
          <Card.Text>
            Somos BICHTEC 📱, una empresa apasionada por la tecnología móvil.
            Ofrecemos celulares de las marcas más confiables como iPhone,
            Samsung y Xiaomi, combinando calidad, asesoramiento y precios
            competitivos.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default BorderExample;