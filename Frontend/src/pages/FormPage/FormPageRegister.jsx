import React from 'react'
import ValidationsForms from "../../components/Validations/ValidationsForms";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from '../../components/Register/Register';

const FormPageRegister = () => {
    const nombreRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const repeatPasswordRef = useRef(null);
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();

    const manejarEnvio = (FormData) => {
        const errores = ValidationsForms(FormData);

        if(Object.keys(errores).length > 0) {
            if (errores.email && emailRef.current) {
                emailRef.current.focus();
            }else if (errores.nombre && nombreRef.current) {
                nombreRef.current.focus();
            }
             else if (errores.password && passwordRef.current) {
                passwordRef.current.focus();
            } else if (errores.repeatPassword && repeatPasswordRef.current) {
                repeatPasswordRef.current.focus();
            }

            setErrores(errores);
        } else {
            setErrores({});
            console.log("✅ Formulario válido:", FormData);
            navigate("/");
        }
    };

    return (
      <>
        <div>
          <Register
            onSubmit={manejarEnvio}
            errores={errores}
            refs={{nombreRef, emailRef, passwordRef, repeatPasswordRef}}
          />
        </div>
      </>
    );
}

export default FormPageRegister