import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado && usuarioGuardado !== "undefined") {
      const usuarioObj = JSON.parse(usuarioGuardado);
      setUsuario(usuarioObj);
      setRol(usuarioObj.rol);
    }
    setCargando(false);
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
    <AuthContext.Provider value={{ usuario, login, logout, rol, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};
