import React, { useContext, useState } from "react";
import "./CardModificarProducto.css";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ValidationsForms from "../Validations/ValidationsForms";

const CardModificarProducto = ({
  producto,
  marcaSeleccionada,
  categoriaSeleccionada,
  onClose,
  recargarProductos,
}) => {
  const { usuario, rol } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: producto?.nombre || "",
    precio: producto?.precio || "",
    descripcion: producto?.descripcion || "",
    stock: producto?.stock || "",
    imagenUrl: producto?.imagenUrl || "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" }); // Limpia el error al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresVal = ValidationsForms(form, "producto");
    if (Object.keys(erroresVal).length > 0) {
      setErrores(erroresVal);
      console.log("Errores:", erroresVal);
      return;
    }
    toast.info(
      <div>
        ¿Estás seguro que quieres actualizar el producto?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#28a745",
              color: "#fff",
              border: "none",
              padding: "5px 12px",
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={async () => {
              toast.dismiss();
              try {
                const response = await fetch(
                  `http://localhost:3000/productos/${producto.id}`,
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  }
                );
                if (response.ok) {
                  toast.success("Producto modificado correctamente");
                  if (recargarProductos) recargarProductos();
                  onClose();
                } else {
                  const error = await response.json();
                  toast.error(
                    error.message || "Error al actualizar el producto"
                  );
                }
              } catch (error) {
                toast.error("Error de conexión al actualizar el producto");
              }
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#dc3545",
              color: "#fff",
              border: "none",
              padding: "5px 12px",
              borderRadius: 5,
              cursor: "pointer",
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

  if (!producto) return null;

  return (
    <div className="detalle-overlay">
      <div className="detalle-contenido">
        <button className="cerrar-btn" onClick={onClose}>
          ✕
        </button>
        <div className="detalle-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                className="form-label"
                style={{
                  color: "#222",
                  fontWeight: "bold",
                  marginBottom: "0.2rem",
                }}
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
              {errores.nombre && (
                <p style={{ color: "red" }}>{errores.nombre}</p>
              )}
            </div>
            <div className="mb-2">
              <label
                className="form-label"
                style={{
                  color: "#222",
                  fontWeight: "bold",
                  marginBottom: "0.2rem",
                }}
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
              {errores.precio && (
                <p style={{ color: "red" }}>{errores.precio}</p>
              )}
            </div>
            <div className="mb-2">
              <label
                className="form-label"
                style={{
                  color: "#222",
                  fontWeight: "bold",
                  marginBottom: "0.2rem",
                }}
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
                style={{
                  color: "#222",
                  fontWeight: "bold",
                  marginBottom: "0.2rem",
                }}
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
                style={{
                  color: "#222",
                  fontWeight: "bold",
                  marginBottom: "0.2rem",
                }}
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
                  fontSize: "1.2rem",
                  padding: "1rem 6rem",
                  borderRadius: "10px",
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
                  fontSize: "1.2rem",
                  padding: "1rem 6rem",
                  borderRadius: "10px",
                }}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardModificarProducto;

/*
{usuario && rol == "admin" && (
              <Button
              type="button"
              onClick={handleBtnComprarClick}
              style={{
                marginBottom: "10px",
                backgroundColor: "#FFD700",
                color: "#000",
                border: "1px solid #000",
                fontWeight: "bold",
                height: "fit-content",
                fontSize: "1.5rem",
                padding: "1rem 6rem",
                borderRadius: "10px",
              }}
            >
              Modificar
            </Button>
            )}
*/
