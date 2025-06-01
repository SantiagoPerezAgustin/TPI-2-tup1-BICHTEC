import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ValidationsForms from "../Validations/ValidationsForms";
import { toast } from "react-toastify";

const FormAgregarProducto = ({
  onClose,
  recargarProductos,
  marcas = [],
  categorias = [],
}) => {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    marcaId: "",
    categoriaId: "",
    stock: "",
    imagenUrl: "",
  });

  const [errores, setErrores] = useState({});
  const [marcasFiltradas, setMarcasFiltradas] = useState([]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "categoriaId") {
      setForm({ ...form, categoriaId: value, marcaId: "" });
      setErrores({ ...errores, categoriaId: "", marcaId: "" });
      if (value) {
        try {
          const res = await fetch(
            `http://localhost:3000/categoriaMarca/categoria/${value}`
          );
          const data = await res.json();
          console.log("Respuesta marcas por categoría:", data); 
          setMarcasFiltradas(data.marcas || []);
        } catch {
          setMarcasFiltradas([]);
        }
      } else {
        setMarcasFiltradas([]);
      }
    } else {
      setForm({ ...form, [name]: value });
      setErrores({ ...errores, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresVal = ValidationsForms(form, "producto");
    if (!form.marcaId) erroresVal.marcaId = "La marca es obligatoria";
    if (!form.categoriaId)
      erroresVal.categoriaId = "La categoría es obligatoria";
    if (Object.keys(erroresVal).length > 0) {
      setErrores(erroresVal);
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        toast.success("Producto agregado correctamente");
        if (recargarProductos) recargarProductos();
        setForm({
          nombre: "",
          precio: "",
          descripcion: "",
          marcaId: "",
          categoriaId: "",
          stock: "",
          imagenUrl: "",
        });
        onClose && onClose();
      } else {
        const error = await response.json();
        toast.error(error.message || "Error al agregar el producto");
      }
    } catch (error) {
      toast.error("Error de conexión al agregar el producto");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        fontSize: "1.25rem",
        color: "#7c6f00",
        background: "#fffde7",
        padding: "1.5rem 2.5rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 24px 0 rgba(191,161,0,0.08)",
        maxWidth: "800px",
        width: "600px",
        marginTop: "0",
      }}
    >
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Precio
        </label>
        <input
          type="number"
          className="form-control"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          min={0}
        />
        {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Descripción
        </label>
        <textarea
          className="form-control"
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
        />
        {errores.descripcion && (
          <p style={{ color: "red" }}>{errores.descripcion}</p>
        )}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Categoría
        </label>
        <select
          className="form-control"
          name="categoriaId"
          value={form.categoriaId}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
        {errores.categoriaId && (
          <p style={{ color: "red" }}>{errores.categoriaId}</p>
        )}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Marca
        </label>
        <select
          className="form-control"
          name="marcaId"
          value={form.marcaId}
          onChange={handleChange}
          disabled={!form.categoriaId}
        >
          <option value="">Selecciona una marca</option>
          {marcasFiltradas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
        </select>
        {errores.marcaId && <p style={{ color: "red" }}>{errores.marcaId}</p>}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Stock
        </label>
        <input
          type="number"
          className="form-control"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          min={0}
        />
        {errores.stock && <p style={{ color: "red" }}>{errores.stock}</p>}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "#222", fontWeight: "bold", marginBottom: "0.2rem" }}
        >
          Imagen URL
        </label>
        <input
          type="text"
          className="form-control"
          name="imagenUrl"
          value={form.imagenUrl}
          onChange={handleChange}
        />
        {errores.imagenUrl && (
          <p style={{ color: "red" }}>{errores.imagenUrl}</p>
        )}
      </div>
      <div className="d-flex gap-2 mt-3">
        <Button
          type="submit"
          style={{
            marginBottom: "10px",
            backgroundColor: "#FFD700",
            color: "#000",
            border: "1px solid #000",
            fontWeight: "bold",
            height: "fit-content",
            fontSize: "1rem", // Más pequeño
            padding: "0.5rem 2rem", // Menos padding
            borderRadius: "8px", // Un poco más pequeño
          }}
        >
          Guardar
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          style={{
            marginBottom: "10px",
            backgroundColor: "#FFD700",
            color: "#000",
            border: "1px solid #000",
            fontWeight: "bold",
            height: "fit-content",
            fontSize: "1rem", // Más pequeño
            padding: "0.5rem 2rem", // Menos padding
            borderRadius: "8px", // Un poco más pequeño
          }}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default FormAgregarProducto;
