const express = require("express");
const router = express.Router();
const PedidosController = require("../controllers/pedidosController.js");
const pedidosController = new PedidosController();


router.get("/", pedidosController.consultar);


router.post("/", pedidosController.crear);


router.route("/:id")
  .get(pedidosController.consultarPorId)
  .put(pedidosController.actualizar)
  .delete(pedidosController.eliminar);

module.exports = router;