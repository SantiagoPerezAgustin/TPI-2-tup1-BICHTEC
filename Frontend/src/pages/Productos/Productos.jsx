import React, { useEffect, useState } from "react";
import CardProducto from "../../components/CardProducto/CardProducto";
import DetalleProducto from "../../components/DetalleProducto/DetalleProducto";
import CardModificarProducto from "../../components/CardModificarProducto/CardModificarProducto";
import "./Productos.css";
import { useFiltro } from "../../context/FiltroContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productoAModificar, setProductoAModificar] = useState(null);
  const { rol, usuario } = useContext(AuthContext);

  const {
    categoriaSeleccionada,
    marcaSeleccionada,
    busqueda,
    precioMin,
    precioMax,
  } = useFiltro();

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
  try {
    const response = await fetch("http://localhost:3000/productos");
    const data = await response.json();
    setProductos(Array.isArray(data.productos) ? data.productos : []);
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};

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
                onModificar={() => setProductoAModificar(producto)}
                recargarProductos={fetchProductos}
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
      {productoAModificar && usuario && rol === "admin" && (
        <CardModificarProducto
          producto={productoAModificar}
          onClose={() => setProductoAModificar(null)}
          categoriaSeleccionada={categoriaSeleccionada}
          marcaSeleccionada={marcaSeleccionada}
          recargarProductos={fetchProductos}
        />
      )}
    </>
  );
};

export default Productos;
