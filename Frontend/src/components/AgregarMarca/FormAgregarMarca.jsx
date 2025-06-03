import React, { useState } from "react";
import { toast } from "react-toastify";
import ValidationsForms from "../Validations/ValidationsForms";

const FormAgregarMarca = ({ onMarcaAgregada }) => {
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [errores, setErrores] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erroresVal = ValidationsForms({ nombre }, "marca");
    if (Object.keys(erroresVal).length > 0) {
      setErrores(erroresVal);
      toast.error(erroresVal.nombre || "Corrige los errores");
      return;
    }
    setErrores({});
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/marcas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      });
      if (res.ok) {
        toast.success("Marca agregada correctamente");
        setNombre("");
        if (onMarcaAgregada) {
          const data = await res.json();
          const marcaAgregada =
            data.marca || data.categoria || data.nuevaMarca || data;
          onMarcaAgregada(marcaAgregada);
        }
      } else {
        toast.error("No se pudo agregar la marca");
      }
    } catch {
      toast.error("Error de conexión al agregar marca");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fffde7",
        padding: "1.5rem 2rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 12px 0 rgba(191,161,0,0.08)",
        maxWidth: "800px",
        width: "600px",
        margin: "0 auto",
      }}
    >
      <label
        htmlFor="nombre"
        style={{
          color: "#222",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.1rem",
        }}
      >
        Nombre de la marca:
      </label>
      <input
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{
          marginBottom: "0.5rem",
          padding: "0.5rem",
          background: "#fff",
          color: "#222",
          border: "1px solid #bfa100",
          borderRadius: "6px",
          width: "100%",
        }}
        disabled={loading}
        autoComplete="off"
      />
      {errores.nombre && (
        <p
          style={{ color: "red", marginTop: "-0.3rem", marginBottom: "0.5rem" }}
        >
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
          marginTop: "0.5rem",
        }}
      >
        {loading ? "Agregando..." : "Agregar Marca"}
      </button>
    </form>
  );
};

export default FormAgregarMarca;
