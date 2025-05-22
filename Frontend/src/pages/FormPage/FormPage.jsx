import Login from "../../components/Login/Login";
import ValidationsForms from "../../components/Validations/ValidationsForms";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function FormPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const manejarEnvio = async (FormData) => {
    const errores = ValidationsForms(FormData, "login");

    if (Object.keys(errores).length > 0) {
      if (errores.email && emailRef.current) {
        emailRef.current.focus();
      } else if (errores.password && passwordRef.current) {
        passwordRef.current.focus();
      } else if (errores.repeatPassword && repeatPasswordRef.current) {
        repeatPasswordRef.current.focus();
      }

      setErrores(errores);
    } else {
      setErrores({});
      console.log("Antes del fetch");
      try {
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(FormData),
        });
        console.log("Despues del fetch");

        if (response.ok) {
          const data = await response.json();
          if (data.user) {
            localStorage.setItem("token", data.token); // Guarda el token en localStorage
            localStorage.setItem("usuario", JSON.stringify(data.user)); // Guarda el usuario en localStorage
            login(data.user, data.token); // Llama a la función de login del contexto
            toast.success("¡Inicio de sesión exitoso!");
            // Guarda token o usuario si tu backend lo devuelve
            navigate("/");
          } else {
            toast.error("No se recibió el usuario desde el backend.");
          }
        } else {
          const error = await response.json();
          toast.error(error.message || "Error en el inicio de sesión");
        }
      } catch (err) {
        toast.error("No se pudo conectar con el servidor");
      }
    }
  };

  return (
    <>
      <div className="form-page-container">
        <Login
          onSubmit={manejarEnvio}
          errores={errores}
          refs={{ emailRef, passwordRef, repeatPasswordRef }}
        />
      </div>
    </>
  );
}

export default FormPage;
