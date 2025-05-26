const CartItem = ({ item, onEliminar, onModificarCantidad }) => {
  const aumentar = () => onModificarCantidad(item.productoId, item.cantidad + 1);
  const disminuir = () => {
    if (item.cantidad > 1) {
      onModificarCantidad(item.productoId, item.cantidad - 1);
    }
  };

  return (
    <div
      className="card text-light mb-3 shadow-sm"
      style={{
        backgroundColor: "#000",
        border: "1px solid #d4af37",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1" style={{ color: "#d4af37" }}>
            {item.Producto?.nombre || "Producto"}
          </h5>

          <p className="card-text mb-1">Cantidad: {item.cantidad}</p>
          {/* Controles de cantidad */}
          <div className="d-flex align-items-center mb-2">
            <button
              className="btn btn-sm btn-outline-light me-2"
              onClick={disminuir}
            >
              -
            </button>
            <span className="me-2">{item.cantidad}</span>
            <button className="btn btn-sm btn-outline-light" onClick={aumentar}>
              +
            </button>
          </div>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onEliminar(item.productoId)}
          >
            Eliminar
          </button>
        </div>
        <h5 className="mb-0" style={{ color: "#d4af37" }}>
          ${item.precio}
        </h5>
      </div>
    </div>
  );
};

export default CartItem;