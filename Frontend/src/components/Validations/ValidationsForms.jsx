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

  // SOLO valida email en login/register
  if (modo === "register" || modo === "login") {
    if (!datos.email?.trim()) {
      errores.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
      errores.email = "El email no es válido";
    }
  }

  if (!datos.password?.trim() && (modo === "register" || modo === "login")) {
    errores.password = "La contraseña es obligatoria";
  } else if (
    datos.password &&
    !/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i.test(datos.password)
  ) {
    errores.password = "Mínimo 8 caracteres, incluyendo letras y números";
  }

  if (modo === "register") {
    if (!datos.repeatPassword?.trim()) {
      errores.repeatPassword = "Confirma la contraseña";
    } else if (
      !/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i.test(datos.repeatPassword)
    ) {
      errores.repeatPassword =
        "Mínimo 8 caracteres, incluyendo letras y números";
    } else if (datos.repeatPassword !== datos.password) {
      errores.repeatPassword = "La contraseña tiene que ser igual";
    }
  }

  if (modo === "producto") {
    if (!datos.nombre?.trim()) {
      errores.nombre = "El nombre es obligatorio";
    } else if (datos.nombre.length < 2) {
      errores.nombre = "El nombre debe tener al menos 2 caracteres";
    }
    if (!datos.precio?.toString().trim()) {
      errores.precio = "El precio es obligatorio";
    } else if (isNaN(Number(datos.precio)) || Number(datos.precio) < 0) {
      errores.precio = "El precio debe ser un número positivo";
    }
    if (!datos.descripcion?.trim()) {
      errores.descripcion = "La descripción es obligatoria";
    } else if (datos.descripcion.length < 5) {
      errores.descripcion = "La descripción debe tener al menos 5 caracteres";
    }
    if (!datos.stock?.toString().trim()) {
      errores.stock = "El stock es obligatorio";
    } else if (
      !Number.isInteger(Number(datos.stock)) ||
      Number(datos.stock) < 0
    ) {
      errores.stock = "El stock debe ser un número entero positivo";
    }
    if (!datos.imagenUrl?.trim()) {
      errores.imagenUrl = "La URL de la imagen es obligatoria";
    } else if (!/^https?:\/\/.+/i.test(datos.imagenUrl)) {
      errores.imagenUrl = "Debe ser una URL válida de imagen";
    }
  }

  if (modo === "categoria") {
    if (!datos.nombre?.trim()) {
      errores.nombre = "El nombre es obligatorio";
    } else if (datos.nombre.length < 2) {
      errores.nombre = "El nombre debe tener al menos 2 caracteres";
    }
  }

  if (modo === "marca") {
    if (!datos.nombre?.trim()) {
      errores.nombre = "El nombre es obligatorio";
    } else if (datos.nombre.length < 2) {
      errores.nombre = "El nombre debe tener al menos 2 caracteres";
    }
  }


  return errores;
};

export default ValidationsForms;
