const Usuario = require("../model/usuarioModel.js"); // Importar el modelo de usuario
const jwt = require("jsonwebtoken"); // Importar la librería de JWT
const bcrypt = require("bcrypt"); // Importar la librería de bcrypt

class UsuariosController {
    constructor() {}

    async register(req, res) {
        try {
            const { nombre, email, password } = req.body;
            if(!nombre || !email || !password) {
                return res.status(400).json({message: "Faltan datos requeridos"})
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                return res.status(400).json({
                    message: "El email no tiene un formato válido",
                });
            }

            const usuarioExistente = await Usuario.findOne({ where: { email } });
            if (usuarioExistente) {
                return res.status(400).json({ message: "El email ya está registrado" });
            }

            const hashedPassword = await bcrypt.hash(password, 10); // Hashear la contraseña

            const nuevoUsuario = await Usuario.create({
                nombre,
                email,
                password: hashedPassword, // Guardar la contraseña hasheada
            });

            res.status(201).json({
                message: "Usuario registrado",
                usuario: {
                    id: nuevoUsuario.id,
                    nombre: nuevoUsuario.nombre,
                    email: nuevoUsuario.email,
                },
            });

        } catch (error) {
            res.status(500).json({ message: "Error al registrar el usuario", error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            if(!email || !password) {
                return res.status(400).json({message: "Faltan datos requeridos"})
            }

            const usuario = await Usuario.findOne({ where: { email } });

            if (!usuario) {
                return res.status(400).json({ message: "Usuario no encontrado" });
            }    

            //Verificar la contraseña
            const passwordValido = await bcrypt.compare(password, usuario.password);
            if (!passwordValido) {
                return res.status(400).json({ message: "Contraseña incorrecta" });
            }

            // Crear el token JWT
            const token = jwt.sign({ id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol },
                "secreto",
                { expiresIn: "1h" } 
            );

            res.status(201).json({
                message: "Inicio de sesión exitoso",
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rol: usuario.rol,
                },
                token : token, // Enviar el token al cliente
            });
        } catch (error) {
            res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
        }
    }        
    // Método para consultar la lista de usuarios
    async consultar(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.json({
                message: "Lista de usuarios",
                usuarios,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al consultar los usuarios",
                error: error.message,
            });
            
        }
    }
  // Método para consultar un usuario por ID
    async consultarPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);
            if (usuario) {
                res.json({
                    message: "Usuario encontrado",
                    usuario,
                });
            } else {
                res.status(404).json({
                    message: "Usuario no encontrado",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error al consultar el usuario",
                error: error.message,
            });
        }

    }

    // Método para actualizar un usuario existente
    async actualizar(req, res) {
        try {
            const { id } = req.params;
            const { nombre, email, password } = req.body;
            if(!nombre || !email || !password) {
                return res.status(400).json({
                    message: "Faltan datos requeridos",
                });
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                return res.status(400).json({
                    message: "El email no tiene un formato válido",
                });
            }
            const [actualizado] = await Usuario.update(req.body, {where: { id }});
            if (actualizado) {
                const usuarioActualizado = await Usuario.findByPk(id);
                res.json({
                    message: "Usuario actualizado",
                    usuario: usuarioActualizado,
                });
            } else {
                res.status(404).json({
                    message: "Usuario no encontrado",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error al actualizar el usuario",
                error: error.message,
            });
            
        }
    }

    // Método para eliminar un usuario
    async eliminar(req, res) {
        try {
            const { id } = req.params;
            const eliminado = await Usuario.destroy({ where: { id } });
            if (eliminado) {
                res.json({
                    message: "Usuario eliminado",
                });
            } else {
                res.status(404).json({
                    message: "Usuario no encontrado",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error al eliminar el usuario",
                error: error.message,
            });
        }
    }
}

module.exports = UsuariosController;