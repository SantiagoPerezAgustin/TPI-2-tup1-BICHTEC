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
      <div className="main-layout">
        <div className="productos-grid">
          {productosFiltrados.length === 0 ? (
            <p className="text-black">No hay productos para mostrar.</p>
          ) : (
            productosFiltrados.map((producto) => (
              <div key={producto.id} style={{ cursor: "pointer" }}>
                <CardProducto
                  producto={producto}
                  onVerDetalles={() => setProductoSeleccionado(producto)}
                />
              </div>
            ))
          )}
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
