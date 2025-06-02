import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CardProducto({ producto, onVerDetalles, onModificar, recargarProductos }) {
  function normalizarPrecio(precio) {
    const num = Number(precio);
    // Si el precio es menor a 1000, probablemente está mal (con o sin decimales)
    if (num < 1000) {
      return num * 1000;
    }
    return num;
  }

  const navigate = useNavigate();

  const { usuario, rol } = useContext(AuthContext);

  const handleBtnComprarClick = (e) => {
    if (!usuario) {
      e.preventDefault();
      toast.error("Debes iniciar sesión para comprar.");
      navigate("/login");
    }
  };

  const handleEliminar = () => {
  toast.info(
    <div>
      ¿Estás seguro que deseas eliminar este producto?
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
              const response = await fetch(`http://localhost:3000/productos/${producto.id}`, {
                method: "DELETE",
              });
              if (response.ok) {
                toast.success("Producto eliminado correctamente");
                if (recargarProductos) recargarProductos();
              } else {
                toast.error("Error al eliminar el producto");
              }
            } catch (error) {
              toast.error("Error de conexión al eliminar el producto");
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
  return (
    <Card
      style={{
        minWidth: "9rem",
        maxWidth: "19rem",
        minHeight: "22rem",
        maxHeight: "30rem",
        border: "3px solid #FFD700",
        backgroundColor: "#fdf6e3",
      }}
    >
      <Card.Img
        variant="top"
        src={producto.imagenUrl}
        style={{
          minHeight: "11rem",
          maxHeight: "18rem",
          objectFit: "contain",
          backgroundColor: "#fff",
          marginBottom: "0.5rem",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "calc(420px - 180px)",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <div>
          <Card.Title
            className="text-center"
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              marginBottom: "0.25rem",
              color: "#000",
              textShadow: "1px 1px 0 #FFD700",
            }}
          >
            {producto.nombre}
          </Card.Title>
          <div className="text-center" style={{ marginBottom: "0.5rem" }}>
            <span
              style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: "1.2rem",
                background: "linear-gradient(45deg, #FFD700, #FFEA00)",
                borderRadius: "8px",
                padding: "0.25rem 0.75rem",
                boxShadow: "0 0 6px rgba(0,0,0,0.2)",
              }}
            >
              $
              {normalizarPrecio(producto.precio).toLocaleString("es-AR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-3 mb-2">
          {rol === "admin" && (
            <Button
              type="button"
              style={{
                backgroundColor: "#40A9FF",
                color: "#000",
                border: "1px solid #000",
                fontWeight: "bold",
              }}
              onClick={onModificar}
            >
              Modificar
            </Button>
          )}
          {rol === "admin" && (
            <Button
              type="button"
              style={{
                backgroundColor: "#FF4D4F ",
                color: "#000",
                border: "1px solid #000",
                fontWeight: "bold",
              }}
              onClick={handleEliminar}
            >
              Eliminar
            </Button>
          )}
          {rol !== "admin" && (
            <Button
              type="button"
              onClick={handleBtnComprarClick}
              style={{
                backgroundColor: "#FFD700",
                color: "#000",
                border: "1px solid #000",
                fontWeight: "bold",
              }}
            >
              Comprar +
            </Button>
          )}
          {rol !== "admin" && (
            <Button type="button" variant="dark" onClick={onVerDetalles}>
              Ver detalle
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
