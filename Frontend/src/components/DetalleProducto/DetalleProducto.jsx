import React from "react";
import "./DetalleProducto.css"; // Asegurate de tener este archivo

const DetalleProducto = ({
  producto,
  marcaSeleccionada,
  categoriaSeleccionada,
  onClose,
}) => {
  if (!producto) return null;

  return (
    <div className="detalle-overlay">
      <div className="detalle-contenido">
        <button className="cerrar-btn" onClick={onClose}>
          ✕
        </button>
        <div className="detalle-body">
          <img
            src={producto.imagenUrl}
            alt={producto.nombre}
            className="detalle-imagen"
          />
          <h2 className="detalle-titulo">{producto.nombre}</h2>
          <p className="detalle-descripcion">
            <strong>Descripción:</strong> {producto.descripcion}
          </p>
          <h2>Precio: ${producto.precio}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
