import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const EliminarUsuario = () => {
  const [confirmacion, setConfirmacion] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const { usuario, logout } = useContext(AuthContext);

  const eliminarCuenta = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (respuesta.ok) {
        setMensaje("Cuenta eliminada. Redirigiendo...");
        logout();
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        const datos = await respuesta.json();
        setMensaje(datos.message || "Error al eliminar cuenta.");
      }
    } catch (error) {
      setMensaje("Error de red o del servidor.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fffbe6 0%, #ffe066 100%)",
        borderRadius: "16px",
        boxShadow: "0 4px 24px 0 rgba(191,161,0,0.13)",
        padding: "2rem 2.5rem",
        margin: "0 auto 2rem auto",
        maxWidth: 420,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "#ff4d4f",
          marginBottom: "1.2rem",
          letterSpacing: "1px",
        }}
      >
        Eliminar Cuenta
      </h3>
      {!confirmacion ? (
        <button
          onClick={() => setConfirmacion(true)}
          style={{
            background: "linear-gradient(90deg, #ff4d4f 60%, #ffe066 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            padding: "0.7rem 0",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            boxShadow: "0 2px 8px 0 rgba(255,77,79,0.10)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        >
          Eliminar mi cuenta
        </button>
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <p style={{ color: "#bfa100", marginBottom: "1rem" }}>
            ¿Estás seguro? Esta acción no se puede deshacer.
          </p>
          <button
            onClick={eliminarCuenta}
            style={{
              background: "linear-gradient(90deg, #ff4d4f 60%, #ffe066 100%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "0.7rem 0",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              marginBottom: "0.7rem",
              boxShadow: "0 2px 8px 0 rgba(255,77,79,0.10)",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
          >
            Sí, eliminar permanentemente
          </button>
          <button
            onClick={() => setConfirmacion(false)}
            style={{
              background: "none",
              color: "#222",
              textDecoration: "underline",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              marginLeft: "1rem",
            }}
          >
            Cancelar
          </button>
        </div>
      )}
      {mensaje && (
        <p
          style={{
            fontSize: "1rem",
            marginTop: "0.8rem",
            color: mensaje.includes("eliminada") ? "#4BB543" : "#ff4d4f",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default EliminarUsuario;