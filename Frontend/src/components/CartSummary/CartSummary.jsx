const CartSummary = ({ items }) => {
  const total = items.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div
      className="card text-light shadow-sm"
      style={{
        backgroundColor: "#000",
        border: "1px solid #d4af37",
      }}
    >
      <div className="card-body">
        <h4 className="card-title" style={{ color: "#d4af37" }}>
          Resumen de compra
        </h4>
        <hr style={{ borderColor: "#d4af37" }} />
        <p className="fs-5">
          Total:{" "}
          <strong style={{ color: "#d4af37" }}>${total.toFixed(2)}</strong>
        </p>
        <button
          className="btn w-100 mt-3"
          style={{
            backgroundColor: "#d4af37",
            color: "#000",
            border: "none",
          }}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
