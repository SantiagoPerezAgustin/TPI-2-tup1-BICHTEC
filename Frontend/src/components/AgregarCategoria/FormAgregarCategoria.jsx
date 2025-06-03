import React, { useState } from "react";
import { toast } from "react-toastify";
import ValidationsForms from "../Validations/ValidationsForms";

const FormAgregarCategoria = ({ onCategoriaAgregada }) => {
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [errores, setErrores] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erroresVal = ValidationsForms({ nombre }, "categoria");
    if (Object.keys(erroresVal).length > 0) {
      setErrores(erroresVal);
      toast.error(erroresVal.nombre || "Corrige los errores");
      return;
    }
    setErrores({});
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/categorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      });
      if (res.ok) {
        toast.success("Categoría agregada correctamente");
        setNombre("");
        if (onCategoriaAgregada) {
          const data = await res.json();
          const nuevaCategoria = data.categoria || data.nuevaCategoria || data;
          onCategoriaAgregada(nuevaCategoria);
        }
      } else {
        toast.error("No se pudo agregar la categoría");
      }
    } catch {
      toast.error("Error de conexión al agregar categoría");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
        fontSize: "1.25rem",
        color: "#7c6f00",
        background: "#fffde7",
        padding: "1.5rem 2.5rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 24px 0 rgba(191,161,0,0.08)",
        maxWidth: "800px",
        width: "600px",
        marginTop: "0",
      }}>
      <label
        htmlFor="nombre"
        style={{
          color: "#222",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.1rem"
        }}
      >
        Nombre de la categoría:
      </label>
      <input
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        style={{
          marginBottom: "0.5rem",
          padding: "0.5rem",
          background: "#fff",
          color: "#222",
          border: "1px solid #bfa100",
          borderRadius: "6px",
          width: "100%"
        }}
        disabled={loading}
        autoComplete="off"
      />
      {errores.nombre && (
        <p style={{ color: "red", marginTop: "-0.3rem", marginBottom: "0.5rem" }}>
          {errores.nombre}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          backgroundColor: "#FFD700",
          color: "#000",
          border: "1px solid #bfa100",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.5rem 2rem",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
          marginTop: "0.5rem"
        }}
      >
        {loading ? "Agregando..." : "Agregar Categoría"}
      </button>
    </form>
  );
};

export default FormAgregarCategoria;