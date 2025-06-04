import React, { useContext, useEffect, useState } from "react";
import ActualizarPassword from "../../components/ActualizarPassword/ActualizarPassword";
import EliminarUsuario from "../../components/EliminarUsuario/EliminarUsuario";
import { AuthContext } from "../../context/AuthContext";

const Perfil = () => {
  const { usuario } = useContext(AuthContext);
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [loadingPedidos, setLoadingPedidos] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await fetch("http://localhost:3000/pedidos");
        if (res.ok) {
          const data = await res.json();
          // Filtra los pedidos por usuarioId 
          const pedidosUsuario = (data.pedidos || []).filter(
            (pedido) => pedido.usuarioId === usuario?.id
          );
          setPedidos(pedidosUsuario);
        }
      } catch {
        setPedidos([]);
      } finally {
        setLoadingPedidos(false);
      }
    };
    if (usuario?.id) fetchPedidos();
    else setLoadingPedidos(false);
  }, [usuario]);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "rgb(248, 232, 139)",
        paddingTop: "3rem",
      }}
    >
      <h2
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
        Mi perfil
      </h2>
      <div
        style={{
          background: "linear-gradient(135deg, #fffbe6 0%, #ffe066 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px 0 rgba(191,161,0,0.13)",
          padding: "2rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
          maxWidth: 500,
          width: "100%",
        }}
      >
        <div
          style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#bfa100" }}
        >
          {usuario?.nombre} {usuario?.apellido}
        </div>
        <div style={{ color: "#333" }}>
          <b>Email:</b> {usuario?.email}
        </div>
        <div style={{ color: "#333" }}>
          <b>Rol:</b> {usuario?.rol}
        </div>
      </div>

      <br />
      <br />

      <hr
        style={{
          width: "80%",
          border: "none",
          borderTop: "2px solid rgb(30, 30, 29)",
          margin: "2rem auto",
        }}
      />

      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#bfa100",
          margin: "2.5rem 0 1rem 0",
          letterSpacing: "1px",
        }}
      >
        Mis pedidos
      </h3>
      <div
        style={{
          background: "#fffde7",
          borderRadius: "12px",
          boxShadow: "0 2px 12px 0 rgba(191,161,0,0.08)",
          padding: "1.5rem",
          marginBottom: "2rem",
          minHeight: "80px",
          maxWidth: 600,
          width: "100%",
        }}
      >
        {loadingPedidos ? (
          <span>Cargando pedidos...</span>
        ) : pedidos.length === 0 ? (
          <span>No tienes pedidos registrados.</span>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {pedidos.map((pedido) => (
              <li
                key={pedido.id}
                style={{
                  borderBottom: "1px solid #ffe066",
                  padding: "0.7rem 0",
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                <b>Compra #{pedido.id}</b> -{" "}
                {pedido.fechaPedido
                  ? new Date(pedido.fechaPedido).toLocaleDateString()
                  : "Sin fecha"}
                <br />
                <span style={{ color: "#bfa100" }}>
                  Estado: {pedido.estado}
                </span>
                <br />
                <span style={{ color: "#555" }}>
                  Dirección de envío:{" "}
                  {pedido.direccionEnvio || "No especificada"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <br />

      <hr
        style={{
          width: "80%",
          border: "none",
          borderTop: "2px solid rgb(30, 30, 29)",
          margin: "2rem auto",
        }}
      />

      <br />
      <br />
      <br />

      <div style={{ width: "100%", maxWidth: 500 }}>
        <ActualizarPassword />
        <br />
        <hr
          style={{
            width: "100%",
            border: "none",
            borderTop: "2px solid rgb(30, 30, 29)",
            margin: "2rem auto",
          }}
        />
        <br />
        <br />
        <EliminarUsuario />
      </div>
    </div>
  );
};

export default Perfil;
