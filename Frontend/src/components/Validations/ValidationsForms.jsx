const ValidationsForms = (datos) => {
    const errores = {};

    if (!datos.email?.trim()){
        errores.email = "El email es obligatorio";
    }else if (!/\S+@\S+\.\S+/.test(datos.email)){
        errores.email = "El email no es válido";
    }

    if (!datos.password?.trim()){
        errores.password = "La contraseña es obligatoria";
    }else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(datos.password)) {
        errores.password = "Mínimo 8 caracteres, incluyendo letras y números";
    }

    if(!datos.password?.trim()) {
        errores.repeatPassword = "Confirma la contaseña";
    }else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(datos.repeatPassword)) {
        errores.repeatPassword =
          "Mínimo 8 caracteres, incluyendo letras y números";
    }else if(datos.repeatPassword !== datos.password) {
        errores.repeatPassword = "La contraseña tiene que ser igual";
    }
    return errores;
}

export default ValidationsForms;
