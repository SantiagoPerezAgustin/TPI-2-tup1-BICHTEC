import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProducto({ producto }) {
  function normalizarPrecio(precio) {
    const num = Number(precio);
    // Si el precio es menor a 1000, probablemente está mal (con o sin decimales)
    if (num < 1000) {
      return num * 1000;
    }
    return num;
  }
  return (
    <Card
      style={{
        width: "16rem",
        minHeight: "220px",
        maxHeight: "360px",
        border: "2px solid #FFD700", // borde dorado
        backgroundColor: "#fdf6e3", // fondo suave
      }}
    >
      <Card.Img
        variant="top"
        src={producto.imagenUrl}
        style={{
          height: "180px",
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
              color: "#000", // negro
              textShadow: "1px 1px 0 #FFD700", // sombra dorada
            }}
          >
            {producto.nombre}
          </Card.Title>
          <div className="text-center" style={{ marginBottom: "0.5rem" }}>
            <span
              style={{
                color: "#000", // negro
                fontWeight: "bold",
                fontSize: "1.2rem",
                background: "linear-gradient(45deg, #FFD700, #FFEA00)", // dorado
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
          <Button
            style={{
              backgroundColor: "#FFD700", // dorado
              color: "#000", // negro
              border: "1px solid #000",
              fontWeight: "bold",
            }}
          >
            Comprar +
          </Button>
          <Button variant="dark">Ver detalle</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
