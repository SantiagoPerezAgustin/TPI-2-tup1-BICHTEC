import React from "react";

const CardCategoriaMarca = ({ categoriaMarca, onEliminar }) => {
  return (
    <>
      <style>
        {`
          @media (max-width: 700px) {
            .card-categoria-marca {
              flex-direction: column;
              align-items: flex-start !important;
              width: 98% !important;
              max-width: 98vw !important;
              min-width: 0 !important;
              padding: 1rem !important;
              gap: 1rem !important;
            }
            .card-categoria-marca-btns {
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
        className="card-categoria-marca"
        style={{
          background: "linear-gradient(135deg, #fffbe6 0%, #ffe066 100%)",
          border: "none",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(191,161,0,0.13)",
          padding: "1.7rem 2.2rem",
          margin: "1.2rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "320px",
          maxWidth: "800px",
          width: "100%",
          transition: "box-shadow 0.2s",
          gap: "1.5rem",
        }}
      >
        <div style={{ textAlign: "left", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "1.2rem",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#bfa100",
                fontSize: "1.1rem",
                letterSpacing: "1px",
                background: "rgba(255, 253, 231, 0.0)",
                borderRadius: "6px",
                padding: "0.15rem 0.7rem",
                border: "1px solid #ffe066",
              }}
            >
              #ID Relación {categoriaMarca.id}
            </span>
            <span
              style={{
                fontSize: "1.1rem",
                color: "#222",
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              idCategoria: {categoriaMarca.categoriaId} | idMarca: {categoriaMarca.marcaId}
            </span>
          </div>
        </div>
        <div className="card-categoria-marca-btns" style={{ display: "flex", gap: "1.2rem", flexDirection: "row" }}>
          <button
            onClick={() => onEliminar && onEliminar(categoriaMarca)}
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
            onMouseOver={e => e.currentTarget.style.background = "#ff4d4f"}
            onMouseOut={e => e.currentTarget.style.background = "linear-gradient(90deg, #ff4d4f 70%, #fffbe6 100%)"}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCategoriaMarca;