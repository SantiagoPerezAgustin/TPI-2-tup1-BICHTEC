import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";

const Productos = () => {
  return (
    <>
      <SideBar>
        <div className="container">
          <h1>Productos</h1>
          <p>Bienvenido a la sección de productos.</p>
          <p>Aquí puedes encontrar una variedad de productos disponibles.</p>
        </div>
      </SideBar>
    </>
  );
};

export default Productos;
