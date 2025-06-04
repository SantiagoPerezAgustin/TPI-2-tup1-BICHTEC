import React, { useState } from "react";
import { toast } from "react-toastify";
import ValidationsForms from "../Validations/ValidationsForms";

const CardModificarCategoria = ({
  categoria,
  onClose,
  onCategoriaModificada,
}) => {
  const [nombre, setNombre] = useState(categoria.nombre);
  const [loading, setLoading] = useState(false);
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usar ValidationsForms para validar el nombree
    const erroresVal = ValidationsForms({ nombre }, "categoria");
    if (Object.keys(erroresVal).length > 0) {
      setErrores(erroresVal);
      toast.error(erroresVal.nombre || "Corrige los errores");
      return;
    }
    setErrores({});

    toast.info(
      <div>
        ¿Confirmar cambios para <b>{nombre}</b>?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#ffe066",
              color: "#222",
              border: "1px solid #bfa100",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={async () => {
              toast.dismiss();
              setLoading(true);
              try {
                const res = await fetch(
                  `http://localhost:3000/categorias/${categoria.id}`,
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nombre }),
                  }
                );
                if (res.ok) {
                  toast.success("Categoría modificada");
                  onCategoriaModificada &&
                    onCategoriaModificada({ ...categoria, nombre });
                  onClose && onClose();
                } else {
                  toast.error("No se pudo modificar la categoría.");
                }
              } catch {
                toast.error("Error de conexión al modificar.");
              } finally {
                setLoading(false);
              }
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  return (
    <div className="detalle-overlay">
      <div className="detalle-contenido">
        <button className="cerrar-btn" onClick={onClose}>
          ✕
        </button>
        <form onSubmit={handleSubmit}>
          <label
            style={{
              color: "#222",
              fontWeight: "bold",
              marginBottom: "0.2rem",
            }}
          >
            Nuevo nombre:
          </label>
          <input
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              margin: "1rem",
              padding: "0.5rem",
              background: "#fff",
              color: "#222",
              border: "1px solid #bfa100",
              borderRadius: "6px",
            }}
            disabled={loading}
          />
          {errores.nombre && (
            <p style={{ color: "red", marginTop: "-0.8rem" }}>{errores.nombre}</p>
          )}
          <button
            type="submit"
            style={{
              marginBottom: "10px",
              marginRight: "10px",
              backgroundColor: "#FFD700",
              color: "#000",
              border: "1px solid #000",
              fontWeight: "bold",
              height: "fit-content",
              fontSize: "1rem",
              padding: "0.5rem 2rem",
              borderRadius: "8px",
            }}
            disabled={loading}
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            style={{
              marginBottom: "10px",
              backgroundColor: "#FFD700",
              color: "#000",
              border: "1px solid #000",
              fontWeight: "bold",
              height: "fit-content",
              fontSize: "1rem",
              padding: "0.5rem 2rem",
              borderRadius: "8px",
            }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardModificarCategoria;