import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import CardProducto from "../../components/CardProducto/CardProducto";
import "./Productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => {
      console.log("Datos recibidos:", data); // <-- Agrega esto
      setProductos(Array.isArray(data.productos) ? data.productos : []);
    });
  }, []);

  return (
    <>
      <SideBar>
        <div className="productos-grid">
          {(Array.isArray(productos) ? productos : []).map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </SideBar>
    </>
  );
};

export default Productos;
