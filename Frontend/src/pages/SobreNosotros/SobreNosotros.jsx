import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carta from '../../components/CartaSobreNosotros/Carta';
import "./SobreNosotros.css"

const SobreNosotros = () => {
  return (
    <>
      <Header />
      <div className="sobre-nosotros-wrapper">
        <Carta />
      </div>

      <Footer />
    </>
  );
}

export default SobreNosotros