import Login from "../../components/Login/Login";
import ValidationsForms from "../../components/Validations/ValidationsForms";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
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
            } else if (errores.password && passwordRef.current) {
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
        <div className="form-page-container">
          <Login
            onSubmit={manejarEnvio}
            errores={errores}
            refs={{ emailRef, passwordRef, repeatPasswordRef}}
          />
        </div>
      </>
    );
}

export default FormPage;