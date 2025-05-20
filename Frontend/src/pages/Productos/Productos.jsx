import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import CardProducto from "../../components/CardProducto/CardProducto";
import "./Productos.css";
import { useFiltro } from "../../context/FiltroContext";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaSeleccionada, marcaSeleccionada, busqueda, precioMin, precioMax } = useFiltro();

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(Array.isArray(data.productos) ? data.productos : []);
      });
  }, []);

  // Filtrado por categoría y marca
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = categoriaSeleccionada
      ? producto.categoriaId === categoriaSeleccionada
      : true;
    const coincideMarca = marcaSeleccionada
      ? producto.marcaId === marcaSeleccionada
      : true;
     const coincideBusqueda = busqueda
      ? producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      : true; 
      const coincidePrecioMin = precioMin !== ""
      ? producto.precio >= Number(precioMin)
      : true;
    const coincidePrecioMax = precioMax !== ""
      ? producto.precio <= Number(precioMax)
      : true;
    return coincideCategoria && coincideMarca && coincideBusqueda && coincidePrecioMin && coincidePrecioMax;
  });

  return (
    <div className="productos-grid">
      {productosFiltrados.length === 0 ? (
        <p className="text-black">No hay productos para mostrar.</p>
      ) : (
        productosFiltrados.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))
      )}
    </div>
  );
};

export default Productos;
