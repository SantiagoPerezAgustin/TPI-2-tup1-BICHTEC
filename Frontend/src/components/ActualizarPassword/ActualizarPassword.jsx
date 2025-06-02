import React, { useState } from "react";

const ActualizarPassword = () => {
  const [actual, setActual] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nueva !== confirmar) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    try {
      const respuesta = await fetch("/api/usuarios/cambiar-contraseña", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Agrega token si lo usas
        },
        body: JSON.stringify({
          actual,
          nueva,
        }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        setMensaje("Contraseña actualizada correctamente.");
      } else {
        setMensaje(datos.error || "Error al cambiar contraseña.");
      }
    } catch (error) {
      setMensaje("Error de red o del servidor.");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Cambiar Contraseña</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Contraseña actual"
          className="w-full border p-2 rounded"
          value={actual}
          onChange={(e) => setActual(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Nueva contraseña"
          className="w-full border p-2 rounded"
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar nueva contraseña"
          className="w-full border p-2 rounded"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Guardar cambios
        </button>
        {mensaje && <p className="text-sm mt-2 text-red-500">{mensaje}</p>}
      </form>
    </div>
  );
};

export default ActualizarPassword;
