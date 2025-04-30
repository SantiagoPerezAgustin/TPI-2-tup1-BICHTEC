import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import logoImage from './bichtec.jpg'

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}


export default Header;