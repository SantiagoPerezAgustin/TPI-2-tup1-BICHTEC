import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const { usuario } = useContext(AuthContext);
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito del backend al iniciar sesión
  useEffect(() => {
    if (usuario) {
      fetch(`http://localhost:3000/carrito/${usuario.id}`)
        .then((res) => res.json())
        .then((data) =>
          setCarrito(data.CarritoDetalles || data.productos || [])
        );
    } else {
      setCarrito([]);
    }
  }, [usuario]);

  // Agregar producto al carrito (llama al backend)
  const agregarAlCarrito = async (productoId, cantidad = 1) => {
    if (!usuario) return;
    const res = await fetch(
      `http://localhost:3000/carrito/${usuario.id}/agregar`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productoId, cantidad }),
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al agregar producto");
    }
    // Refresca el carrito
    const res2 = await fetch(`http://localhost:3000/carrito/${usuario.id}`);
    const data = await res2.json();
    setCarrito(data.CarritoDetalles || data.productos || []);
  };

  // Actualizar cantidad
  const actualizarCantidad = async (productoId, cantidad) => {
    if (!usuario) return;
    const res = await fetch(
      `http://localhost:3000/carrito/${usuario.id}/actualizar`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productoId, cantidad }),
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al actualizar cantidad");
    }
    const res2 = await fetch(`http://localhost:3000/carrito/${usuario.id}`);
    const data = await res2.json();
    setCarrito(data.CarritoDetalles || data.productos || []);
  };

  // Quitar producto
  const quitarDelCarrito = async (productoId) => {
    if (!usuario) return;
    const res = await fetch(
      `http://localhost:3000/carrito/${usuario.id}/quitar/${productoId}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al quitar producto");
    }
    const res2 = await fetch(`http://localhost:3000/carrito/${usuario.id}`);
    const data = await res2.json();
    setCarrito(data.CarritoDetalles || data.productos || []);
  };

  // Vaciar carrito
  const vaciarCarrito = async () => {
    if (!usuario) return;
    const res = await fetch(
      `http://localhost:3000/carrito/${usuario.id}/vaciar`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al vaciar carrito");
    }
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        actualizarCantidad,
        quitarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
