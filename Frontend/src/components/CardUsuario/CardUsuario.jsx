import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const CardUsuario = ({ usuario, onEliminar, onModificar }) => {
  const { usuario: usuarioLogueado } = useContext(AuthContext);
  const esYo = usuarioLogueado?.id === usuario.id;

  return (
    <>
      <style>
        {`
          @media (max-width: 700px) {
            .card-usuario {
              flex-direction: column;
              align-items: flex-start !important;
              width: 98% !important;
              max-width: 98vw !important;
              min-width: 0 !important;
              padding: 1rem !important;
            }
            .card-usuario-btns {
              width: 100%;
              flex-direction: row !important;
              justify-content: flex-end;
              gap: 0.7rem !important;
              margin-top: 1rem;
            }
          }
        `}
      </style>
      <div
        className="card-usuario"
        style={{
          background: "linear-gradient(135deg, #fffbe6 0%, #ffe066 100%)",
          borderRadius: "12px",
          boxShadow: "0 2px 12px 0 rgba(191,161,0,0.08)",
          padding: "1.2rem 1.5rem",
          margin: "0.7rem 0",
          minWidth: 0,
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div style={{ fontWeight: "bold", color: "#bfa100", fontSize: "1.1rem" }}>
            {usuario.nombre} {usuario.apellido}{" "}
            {esYo && (
              <span style={{ color: "#ff4d4f", fontSize: "1rem" }}>(yo)</span>
            )}
          </div>
          <div style={{ color: "#888", fontSize: "0.75rem" }}>
            <b>ID:</b> {usuario.id}
          </div>
          <div style={{ color: "#333", fontSize: "0.98rem" }}>
            <b>Email:</b> {usuario.email}
          </div>
          <div style={{ color: "#333", fontSize: "0.98rem" }}>
            <b>Rol:</b> {usuario.rol}
          </div>
        </div>
        <div className="card-usuario-btns" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {onEliminar && !esYo && (
            <button
              onClick={() => onEliminar(usuario)}
              style={{
                background: "linear-gradient(90deg, #ff4d4f 70%, #fffbe6 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.45rem 1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 2px 8px 0 rgba(255,77,79,0.10)",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#ff4d4f")}
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #ff4d4f 70%, #fffbe6 100%)")
              }
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardUsuario;