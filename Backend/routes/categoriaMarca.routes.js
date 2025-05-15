const express = require('express');
const router = express.Router();
const CategoriaMarcaController = require('../controllers/categoriaMarcaController.js');
const categoriaMarcaController = new CategoriaMarcaController();

router.get('/', categoriaMarcaController.consultar);

router.post('/', categoriaMarcaController.crear);

router.get('/categoria/:id', categoriaMarcaController.obtenerMarcasPorCategoria);

router.get('/marca/:id', categoriaMarcaController.obtenerCategoriasPorMarca);


module.exports = router;