import React from "react";
import ValidationsForms from "../../components/Validations/ValidationsForms";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../../components/Register/Register";
import { toast } from "react-toastify";

const FormPageRegister = () => {
  const nombreRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const manejarEnvio = async (FormData) => {
    const errores = ValidationsForms(FormData, "register");

    if (Object.keys(errores).length > 0) {
      if (errores.email && emailRef.current) {
        emailRef.current.focus();
      } else if (errores.nombre && nombreRef.current) {
        nombreRef.current.focus();
      } else if (errores.password && passwordRef.current) {
        passwordRef.current.focus();
      } else if (errores.repeatPassword && repeatPasswordRef.current) {
        repeatPasswordRef.current.focus();
      }

      //alert("Registro exitoso!");
      //navigate("/");

      setErrores(errores);
    } else {
      setErrores({});

      try {
        const response = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(FormData),
        });

        if (response.ok) {
          const userId = await response.json();
          toast.success("✅ Registro exitoso!");
          navigate("/login");
        } else {
          const error = await response.json();
          toast.error(error.message);
        }
      } catch (err) {
        toast.error("Error en el registro");
      }
    }
  };

  return (
    <>
      <div>
        <Register
          onSubmit={manejarEnvio}
          errores={errores}
          refs={{ nombreRef, emailRef, passwordRef, repeatPasswordRef }}
        />
      </div>
    </>
  );
};

export default FormPageRegister;
