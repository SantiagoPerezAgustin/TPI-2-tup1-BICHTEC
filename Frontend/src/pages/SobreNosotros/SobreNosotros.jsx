import React from "react";
import "./SobreNosotros.css";
import CartaSobreNosotros from "../../components/CartaSobreNosotros/CartaSobreNosotros";
import Contactos from "../../components/Contactos/Contactos";

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-page">
      <div className="contenido-texto">
        <CartaSobreNosotros />
        <Contactos />
      </div>
      <img
        src="../../../Bichtec.png"
        alt="BICHTEC Logo"
        className="imagen-logo"
      />
    </div>
  );
};

export default SobreNosotros;
