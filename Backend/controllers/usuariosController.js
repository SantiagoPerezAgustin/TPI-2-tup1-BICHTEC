const Usuario = require("../model/usuarioModel.js"); // Importar el modelo de usuario

class UsuariosController {
    constructor() {}

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

    // Método para crear un nuevo usuario
    async crear(req, res) {
        try {
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
            const nuevoUsuario = await Usuario.create(req.body);
            res.status(201).json({
                message: "Usuario creado",
                usuario: nuevoUsuario,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al crear el usuario",
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