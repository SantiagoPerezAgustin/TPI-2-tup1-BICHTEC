const CartItem = ({ item, onEliminar }) => {
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
            {item.nombre}
          </h5>
          <p className="card-text mb-1">Cantidad: {item.cantidad}</p>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onEliminar(item.id)}
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
