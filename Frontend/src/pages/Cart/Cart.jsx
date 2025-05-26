import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { CarritoContext } from "../../context/CarritoContext";

const Cart = () => {
  const { carrito, actualizarCantidad, quitarDelCarrito } = useContext(CarritoContext);

  const modificarCantidad = (id, nuevaCantidad) => {
    actualizarCantidad(id, nuevaCantidad);
  };

  const eliminarItem = (id) => {
    quitarDelCarrito(id);
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

        {carrito.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="row">
            <div className="col-md-8">
              {carrito.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onEliminar={eliminarItem}
                  onModificarCantidad={modificarCantidad}
                />
              ))}
            </div>
            <div className="col-md-4">
              <CartSummary items={carrito} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;