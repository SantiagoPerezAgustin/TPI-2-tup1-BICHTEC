import React from "react";
import ActualizarPassword from "../../components/ActualizarPassword/ActualizarPassword";
import EliminarUsuario from "../../components/EliminarUsuario/EliminarUsuario";

const Perfil = () => {
  return (
    <>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Mi perfil</h2>
        <ActualizarPassword />
        <hr className="my-8" />
        <EliminarUsuario />
      </main>
    </>
  );
};

export default Perfil;
