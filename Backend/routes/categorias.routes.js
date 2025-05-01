const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoriaController.js');
const categoriaController = new CategoriaController();


router.get('/', categoriaController.consultar);
router.post('/', categoriaController.crear);

router.route('/:id')
  .get(categoriaController.consultarPorId)
  .put(categoriaController.actualizar)
  .delete(categoriaController.eliminar);

  module.exports = router;