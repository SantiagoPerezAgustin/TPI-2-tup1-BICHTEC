import React from 'react';

const CardCategoria = ({ categoria, onEliminar, onModificar }) => {
  return (
    <div
      style={{
        background: "#fffde7",
        border: "1px solid #ffe066",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(191,161,0,0.08)",
        padding: "1.5rem 2rem",
        margin: "1rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "320px",
        maxWidth: "400px",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <div style={{ fontWeight: "bold", color: "#bfa100", fontSize: "1.1rem" }}>
          #{categoria.id}
        </div>
        <div style={{ fontSize: "1.2rem", color: "#222" }}>
          {categoria.nombre}
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => onModificar(categoria)}
          style={{
            background: "#ffe066",
            color: "#222",
            border: "1px solid #bfa100",
            borderRadius: "6px",
            padding: "0.4rem 1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Modificar
        </button>
        <button
          onClick={() => onEliminar(categoria)}
          style={{
            background: "#ff4d4f",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "0.4rem 1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardCategoria;