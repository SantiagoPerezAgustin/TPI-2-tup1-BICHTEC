import React, { useContext } from "react";
import "./CardModificarProducto.css";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CardModificarProducto = ({
  producto,
  marcaSeleccionada,
  categoriaSeleccionada,
  onClose,
}) => {
  const { usuario, rol } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBtnComprarClick = (e) => {
    if (!usuario) {
      e.preventDefault();
      toast.error("Debes iniciar sesión para comprar.");
      navigate("/login");
    } else {
      toast.success("Producto agregado al carrito!");
    }
  };

  if (!producto) return null;

  return (
    <div className="detalle-overlay">
      <div className="detalle-contenido">
        <button className="cerrar-btn" onClick={onClose}>
          ✕
        </button>
        <div className="detalle-body">
          
          <div className="precio-comprar-container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModificarProducto;