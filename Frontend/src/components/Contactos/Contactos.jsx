import Card from "react-bootstrap/Card";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./Contactos.css";

function Contactos() {
  return (
    <div className="contactos-container">
      <Card className="carta-personalizada-contactos">
        <Card.Body>
          <Card.Title>Contactanos</Card.Title>
          <Card.Text>
            <a
              href="https://www.instagram.com/bichtec/"
              target="_blank"
              rel="noopener noreferrer"
              className="enlaces"
            >
              <BsInstagram style={{ marginRight: "4px" }} />
              Instagram
            </a>
            <a
              href="https://wa.link/rjxqc3"
              target="_blank"
              rel="noopener noreferrer"
              className="enlaces"
            >
              <BsWhatsapp style={{ marginRight: "4px" }} />
              Whatsapp
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61574244380407"
              target="_blank"
              rel="noopener noreferrer"
              className="enlaces"
            >
              <BsFacebook style={{ marginRight: "4px" }} />
              Facebook
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contactos;
