import React, { useState } from "react";
import { toast } from "react-toastify";

const FormAgregarRelacion = ({ categorias = [], marcas = [], onRelacionAgregada }) => {
  const [categoriaId, setCategoriaId] = useState("");
  const [marcaId, setMarcaId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoriaId || !marcaId) {
      toast.error("Selecciona una categoría y una marca");
      return;
    }

    setLoading(true);

    try {
  const res = await fetch("http://localhost:3000/categoriaMarca", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ categoriaId: Number(categoriaId), marcaId: Number(marcaId) }),
  });
  const text = await res.text();
  console.log("Respuesta del backend:", text);
  if (res.ok) {
    toast.success("Relación agregada correctamente");
    setCategoriaId("");
    setMarcaId("");
    if (onRelacionAgregada) {
      const data = JSON.parse(text);
      const relacionAgregada = data.relacion || data.nuevaRelacion || data;
      onRelacionAgregada(relacionAgregada);
    }
  } else {
    toast.error("No se pudo agregar la relación");
  }
} catch {
  toast.error("Error de conexión al agregar relación");
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
        margin: "0 auto"
      }}
    >
      <label
        htmlFor="categoria"
        style={{
          color: "#222",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.1rem"
        }}
      >
        Categoría:
      </label>
      <select
        id="categoria"
        value={categoriaId}
        onChange={e => setCategoriaId(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          border: "1px solid #bfa100",
          borderRadius: "6px",
          width: "100%"
        }}
        disabled={loading}
      >
        <option value="">Selecciona una categoría</option>
        {categorias.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.nombre}
          </option>
        ))}
      </select>

      <label
        htmlFor="marca"
        style={{
          color: "#222",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.1rem"
        }}
      >
        Marca:
      </label>
      <select
        id="marca"
        value={marcaId}
        onChange={e => setMarcaId(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          border: "1px solid #bfa100",
          borderRadius: "6px",
          width: "100%"
        }}
        disabled={loading}
      >
        <option value="">Selecciona una marca</option>
        {marcas.map(marca => (
          <option key={marca.id} value={marca.id}>
            {marca.nombre}
          </option>
        ))}
      </select>

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
        {loading ? "Agregando..." : "Agregar Relación"}
      </button>
    </form>
  );
};

export default FormAgregarRelacion;