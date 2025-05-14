const express = require('express');
const router = express.Router();
const MarcaController = require('../controllers/marcaController.js');
const marcaController = new MarcaController();


router.get('/', marcaController.consultar);
router.post('/', marcaController.crear);

router.route('/:id')
  .get(marcaController.consultarPorId)
  .put(marcaController.actualizar)
  .delete(marcaController.eliminar);

  module.exports = router;