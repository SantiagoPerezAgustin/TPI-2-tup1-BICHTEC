const express = require("express");
const router = express.Router();
const ProductosController = require("../controllers/productosController.js");
const productosController = new ProductosController();


router.get("/", productosController.consultar);

router.post("/", productosController.crear);

router.route("/:id")
  .get(productosController.consultarPorId)
  .put(productosController.actualizar)
  .delete(productosController.eliminar);

module.exports = router;
