const Categoria = require("../model/categoriaModel");
const Marca = require("../model/marcaModel");
const CategoriaMarca = require("../model/categoriaMarcaModel");

class CategoriaMarcaController {
  constructor() {}

  async obtenerMarcasPorCategoria(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id, {
        include: [
          {
            model: Marca,
            as: "marcas",
          },
        ],
      });
      
      if (!categoria) {
        return res.status(404).json({
          message: "Categoria no encontrada",
        });
      }

      res.json({
        message: `Marcas de la categoria ${categoria.nombre}`,
        marcas: categoria.marcas,
      });
    } catch (error) {
      throw new Error("Error al obtener las marcas por categoria");
    }
  }

  async obtenerCategoriasPorMarca(req, res) {
    try {
      const { id } = req.params;
      const marca = await Marca.findByPk(id, {
         include: [
        {
          model: Categoria,
          as: "categorias",
        },
      ],
     });

      if (!marca) {
        return res.status(404).json({
          message: "Marca no encontrada",
        });
      }

      res.json({
        message: `Categorias de la marca ${marca.nombre}`,
        categorias: marca.categorias,
      });
  } catch (error) {
      res.status(500).json({
        message: "Error al consultar las categorias por marca",
        error: error.message,
      });
    }
  }
  async crear(req, res) {
    try {
      const { categoriaId, marcaId } = req.body;
      if (!categoriaId || !marcaId) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }
      const nuevaRelacion = await CategoriaMarca.create(req.body);
      res.status(201).json({
        message: "Relacion creada",
        relacion: nuevaRelacion,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear la relacion",
        error: error.message,
      });
    }
  }

  async consultar(req, res) {
    try {
      const relaciones = await CategoriaMarca.findAll();
      res.json({
        message: "Lista de relaciones",
        relaciones,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar las relaciones",
        error: error.message,
      });
    }
  }
}

module.exports = CategoriaMarcaController;
