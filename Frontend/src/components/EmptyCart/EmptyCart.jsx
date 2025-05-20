const EmptyCart = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-light"
      style={{ minHeight: "50vh" }}
    >
      <i
        className="bi bi-cart-x-fill"
        style={{ fontSize: "4rem", marginBottom: "1rem", color: "#d4af37" }}
      ></i>
      <p className="fs-4 text-center">
        Tu carrito está vacío. Agregá productos para continuar con la compra.
      </p>
      <a
        href="/productos"
        className="btn btn-outline-light mt-3"
        style={{ borderColor: "#d4af37", color: "#d4af37" }}
      >
        Ir a productos
      </a>
    </div>
  );
};

export default EmptyCart;
