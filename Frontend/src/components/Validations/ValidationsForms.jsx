const ValidationsForms = (datos, modo = "register") => {
    const errores = {};

    if (modo === "register") {
        if (!datos.nombre?.trim()) {
            errores.nombre = "El nombre es obligatorio";
        } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(datos.nombre)) {
            errores.nombre = "El nombre solo debe contener letras y espacios";
        } else if (datos.nombre.length < 2) {
            errores.nombre = "El nombre debe tener al menos 2 caracteres";
        }
    }

    if (!datos.email?.trim()){
        errores.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(datos.email)){
        errores.email = "El email no es válido";
    }

    if (!datos.password?.trim()){
        errores.password = "La contraseña es obligatoria";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(datos.password)) {
        errores.password = "Mínimo 8 caracteres, incluyendo letras y números";
    }

    if (modo === "register") {
        if(!datos.repeatPassword?.trim()) {
            errores.repeatPassword = "Confirma la contaseña";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(datos.repeatPassword)) {
            errores.repeatPassword =
              "Mínimo 8 caracteres, incluyendo letras y números";
        } else if(datos.repeatPassword !== datos.password) {
            errores.repeatPassword = "La contraseña tiene que ser igual";
        }
    }

    return errores;
}

export default ValidationsForms;
