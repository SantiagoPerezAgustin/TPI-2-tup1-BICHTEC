import { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, nombre: "Producto 1", cantidad: 2, precio: 1500 },
    { id: 2, nombre: "Producto 2", cantidad: 1, precio: 2500 },
  ]);

  const eliminarItem = (id) => {
    const nuevosItems = cartItems.filter((item) => item.id !== id);
    setCartItems(nuevosItems);
  };

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <div
        className="container-fluid px-5"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <a
            href="/productos"
            className="btn btn-outline-light"
            style={{ borderColor: "#d4af37", color: "#d4af37" }}
          >
            ← Volver a productos
          </a>
          <h1
            className="text-center flex-grow-1 m-0"
            style={{ color: "#d4af37" }}
          >
            🛒 Carrito de compras
          </h1>
          <div style={{ width: "142.5px" }}></div>
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="row">
            <div className="col-md-8">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} onEliminar={eliminarItem} />
              ))}
            </div>
            <div className="col-md-4">
              <CartSummary items={cartItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
