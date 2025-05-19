import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import CardProducto from "../../components/CardProducto/CardProducto";
import "./Productos.css";

const Productos = () => {
  return (
    <>
      <SideBar>
        <div className="productos-grid">
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
        </div>
      </SideBar>
    </>
  );
};

export default Productos;
