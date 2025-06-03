import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { usuario, cargando } = useContext(AuthContext);

  if (cargando) {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <ClipLoader color="#bfa100" size={40} />
      <span style={{ display: "block", marginTop: "1rem" }}>Cargando...</span>
    </div>
  );
}

  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
