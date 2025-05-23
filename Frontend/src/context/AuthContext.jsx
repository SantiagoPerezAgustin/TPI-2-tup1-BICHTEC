import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado && usuarioGuardado !== "undefined") {
      const usuarioObj = JSON.parse(usuarioGuardado);
      setUsuario(usuarioObj);
      setRol(usuarioObj.rol);
    }
  }, []);

  const login = (usuario, token) => {
    setUsuario(usuario);
    setRol(usuario.rol);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUsuario(null);
    setRol(null);
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, rol }}>
      {children}
    </AuthContext.Provider>
  );
};
