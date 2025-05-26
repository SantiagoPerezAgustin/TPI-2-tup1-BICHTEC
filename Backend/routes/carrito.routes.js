const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController.js');

router.get('/', carritoController.obtenerCarritos);
router.get('/:usuarioId', carritoController.obtenerCarrito);
router.post('/:usuarioId/agregar', carritoController.agregarProducto);
router.put('/:usuarioId/actualizar', carritoController.actualizarCantidad);
router.delete('/:usuarioId/quitar/:productoId', carritoController.quitarProducto);
router.delete('/:usuarioId/vaciar', carritoController.vaciarCarrito);

module.exports = router;