import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ActualizarPassword = () => {
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { usuario } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nueva !== confirmar) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    try {
      const respuesta = await fetch(`http://localhost:3000/auth/password/${usuario.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: nueva,
        }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        setMensaje("Contraseña actualizada correctamente.");
        setNueva("");
        setConfirmar("");
      } else {
        setMensaje(datos.message || "Error al cambiar contraseña.");
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
          fontSize: "1.4rem",
          fontWeight: "bold",
          color: "#bfa100",
          marginBottom: "1.5rem",
          letterSpacing: "1px",
        }}
      >
        Cambiar Contraseña
      </h3>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
        }}
      >
        <input
          type="password"
          placeholder="Nueva contraseña"
          style={{
            width: "100%",
            border: "1.5px solid #ffe066",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            fontSize: "1rem",
            background: "#fffde7",
            color: "#222",
            outline: "none",
            transition: "border 0.2s",
          }}
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar nueva contraseña"
          style={{
            width: "100%",
            border: "1.5px solid #ffe066",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            fontSize: "1rem",
            background: "#fffde7",
            color: "#222",
            outline: "none",
            transition: "border 0.2s",
          }}
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #bfa100 60%, #ffe066 100%)",
            color: "#222",
            fontWeight: "bold",
            fontSize: "1.1rem",
            padding: "0.7rem 0",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "0.5rem",
            boxShadow: "0 2px 8px 0 rgba(191,161,0,0.08)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        >
          Guardar cambios
        </button>
        {mensaje && (
          <p
            style={{
              fontSize: "1rem",
              marginTop: "0.5rem",
              color: mensaje.includes("correcta") ? "#4BB543" : "#ff4d4f",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
};

export default ActualizarPassword;