import React, { useEffect, useState } from "react";
import FormAgregarProducto from "../../components/AgregarProducto/FormAgregarProducto";

const Panel = () => {
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/marcas")
      .then((res) => res.json())
      .then((data) => setMarcas(data.marcas || []));

    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data.categorias || []));
  }, []);

  return (
    <div
      className="panel-container"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #fffbe6 0%, #ffe066 100%)",
        paddingTop: "3rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#bfa100",
          marginBottom: "1.5rem",
          letterSpacing: "2px",
          textShadow: "0 2px 8px #ffe066",
          alignSelf: "center",
        }}
      >
        Panel de Administración
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#7c6f00",
          background: "#fffde7",
          padding: "1.5rem 2.5rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px 0 rgba(191,161,0,0.08)",
          maxWidth: "500px",
          marginTop: "0",
        }}
      >
        Bienvenido al panel de administración.
        <br />
        Aquí puedes gestionar los productos, usuarios y más.
      </p>

      <br />
      <br />
      <br />

      <h1
        style={{
          fontSize: "2.3rem",
          fontWeight: "bold",
          color: "#bfa100",
          marginBottom: "1.5rem",
          letterSpacing: "2px",
          textShadow: "0 2px 8px #ffe066",
          alignSelf: "center",
        }}
      >
        Productos
      </h1>
      <h1
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "#bfa100",
          marginBottom: "1.5rem",
          letterSpacing: "2px",
          textShadow: "0 2px 8pxrgb(230, 190, 27)",
          alignSelf: "center",
        }}
      >
        Agregar nuevo Producto:
      </h1>

      <FormAgregarProducto marcas={marcas} categorias={categorias} />

      <br />
      <br />
      <br />

      <h1
        style={{
          fontSize: "2.3rem",
          fontWeight: "bold",
          color: "#bfa100",
          marginBottom: "1.5rem",
          letterSpacing: "2px",
          textShadow: "0 2px 8px #ffe066",
          alignSelf: "center",
        }}
      >
        Categorías
      </h1>
      <h1
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "#bfa100",
          marginBottom: "1.5rem",
          letterSpacing: "2px",
          textShadow: "0 2px 8pxrgb(230, 190, 27)",
          alignSelf: "center",
        }}
      >
        Todas las categorías:
      </h1>
    </div>
  );
};

export default Panel;
