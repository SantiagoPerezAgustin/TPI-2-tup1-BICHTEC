const express = require('express');
const router = express.Router();
const PedidosDetallesController = require('../controllers/pedidosDetallesController');
const pedidosDetallesController = new PedidosDetallesController();


// Rutas para pedidosDetalles
router.get('/', pedidosDetallesController.consultar); 
router.post('/', pedidosDetallesController.crear); 

router.route('/:id')
    .get(pedidosDetallesController.consultarPorId) 
    .put(pedidosDetallesController.actualizar) 
    .delete(pedidosDetallesController.eliminar); 

    module.exports = router;