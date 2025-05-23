import React, { useEffect, useState } from "react";
import CardProducto from "../../components/CardProducto/CardProducto";
import DetalleProducto from "../../components/DetalleProducto/DetalleProducto";
import "./Productos.css";
import { useFiltro } from "../../context/FiltroContext";


const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const {
    categoriaSeleccionada,
    marcaSeleccionada,
    busqueda,
    precioMin,
    precioMax,
  } = useFiltro();

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(Array.isArray(data.productos) ? data.productos : []);
      });
  }, []);

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
    const coincidePrecioMin =
      precioMin !== "" ? producto.precio >= Number(precioMin) : true;
    const coincidePrecioMax =
      precioMax !== "" ? producto.precio <= Number(precioMax) : true;

    return (
      coincideCategoria &&
      coincideMarca &&
      coincideBusqueda &&
      coincidePrecioMin &&
      coincidePrecioMax
    );
  });

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {productosFiltrados.map((producto) => (
            <div
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4"
              key={producto.id}
            >
              <CardProducto
                producto={producto}
                onVerDetalles={() => setProductoSeleccionado(producto)}
              />
            </div>
          ))}
        </div>
      </div>

      {productoSeleccionado && (
        <DetalleProducto
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
          categoriaSeleccionada={categoriaSeleccionada}
          marcaSeleccionada={marcaSeleccionada}
        />
      )}
    </>
  );
};

export default Productos;
