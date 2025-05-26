import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartSummary = ({ items }) => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [direccionEnvio, setDireccionEnvio] = useState("");

  const handleFinalizarCompra = async () => {
    if (!usuario) {
      toast.error("Debes iniciar sesión para finalizar la compra.");
      navigate("/login");
      return;
    }
    if (!items.length) {
      toast.error("El carrito está vacío.");
      return;
    }
    if (!direccionEnvio.trim()) {
      toast.error("Debes ingresar una dirección de envío.");
      return;
    }
    try {
      const productos = items.map(item => ({
        productoId: item.productoId,
        cantidad: item.cantidad,
        precio: item.precio ?? item.Producto?.precio ?? 0,
      }));

      const res = await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuarioId: usuario.id,
          direccionEnvio,
          productos,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al finalizar compra");
      }

      vaciarCarrito();
      toast.success("¡Compra realizada con éxito!");
      navigate("/carrito");
    } catch (error) {
      toast.error("Error al finalizar compra: " + error.message);
    }
  };

  const total = items.reduce((sum, item) => {
    const precio = Number(item.precio ?? item.Producto?.precio ?? 0);
    const cantidad = Number(item.cantidad ?? 0);
    return sum + precio * cantidad;
  }, 0);

  return (
    <div className="card text-light shadow-sm" style={{ backgroundColor: "#000", border: "1px solid #d4af37" }}>
      <div className="card-body">
        <h4 className="card-title" style={{ color: "#d4af37" }}>Resumen de compra</h4>
        <hr style={{ borderColor: "#d4af37" }} />
        <div className="mb-3">
          <label htmlFor="direccionEnvio" className="form-label" style={{ color: "#d4af37" }}>
            Dirección de envío
          </label>
          <input
            type="text"
            id="direccionEnvio"
            className="form-control"
            value={direccionEnvio}
            onChange={e => setDireccionEnvio(e.target.value)}
            placeholder="Ingrese su dirección"
          />
        </div>
        <p className="fs-5">
          Total:{" "}
          <strong style={{ color: "#d4af37" }}>
            ${total.toLocaleString("es-AR", { minimumFractionDigits: 0 })}
          </strong>
        </p>
        <button
          className="btn w-100 mt-3"
          style={{
            backgroundColor: "#d4af37",
            color: "#000",
            border: "none",
          }}
          onClick={handleFinalizarCompra}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartSummary;