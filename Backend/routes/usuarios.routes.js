const express = require("express");
const router = express.Router();
const UsuariosController = require("../controllers/usuariosController.js");
const usuariosController = new UsuariosController();

router.get("/", usuariosController.consultar);

router.route("/:id")
  .get(usuariosController.consultarPorId)
  .put(usuariosController.actualizar)
  .delete(usuariosController.eliminar);

module.exports = router;