import React, { useState } from "react";

const EliminarUsuario = () => {
  const [confirmacion, setConfirmacion] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const eliminarCuenta = async () => {
    try {
      const respuesta = await fetch("/api/usuarios/eliminar", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Agrega token si lo usas
        },
      });

      if (respuesta.ok) {
        setMensaje("Cuenta eliminada. Redirigiendo...");
        // Aquí puedes hacer logout o redirigir
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        const datos = await respuesta.json();
        setMensaje(datos.error || "Error al eliminar cuenta.");
      }
    } catch (error) {
      setMensaje("Error de red o del servidor.");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-medium mb-4 text-red-600">Eliminar Cuenta</h3>
      {!confirmacion ? (
        <button
          onClick={() => setConfirmacion(true)}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Eliminar mi cuenta
        </button>
      ) : (
        <div className="space-y-2">
          <p className="text-sm">
            ¿Estás seguro? Esta acción no se puede deshacer.
          </p>
          <button
            onClick={eliminarCuenta}
            className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
          >
            Sí, eliminar permanentemente
          </button>
          <button
            onClick={() => setConfirmacion(false)}
            className="ml-2 text-gray-600 underline"
          >
            Cancelar
          </button>
        </div>
      )}
      {mensaje && <p className="text-sm mt-2 text-red-500">{mensaje}</p>}
    </div>
  );
};

export default EliminarUsuario;
