const Categoria = require("../model/categoriaModel");

class CategoriaController {
  constructor() {}

  async consultar(req, res) {
    try {
      const categorias = await Categoria.findAll();
      res.json({
        message: "Lista de categorias",
        categorias,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar las categorias",
        error: error.message,
      });
    }
  }

  async crear(req, res) {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }
      const nuevaCategoria = await Categoria.create(req.body);
      res.status(201).json({
        message: "Categoria creada",
        categoria: nuevaCategoria,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear la categoria",
        error: error.message,
      });
    }
  }

  async consultarPorId(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (categoria) {
        res.json({
          message: "Categoria encontrada",
          categoria,
        });
      } else {
        res.status(404).json({
          message: "Categoria no encontrada",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar la categoria",
        error: error.message,
      });
    }
  }

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }
      const categoria = await Categoria.findByPk(id);
      if (categoria) {
        await categoria.update(req.body); // Actualizar la categoria
        res.json({
          message: "Categoria actualizada",
          categoria,
        });
      } else {
        res.status(404).json({
          message: "Categoria no encontrada",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar la categoria",
        error: error.message,
      });
    }
  }

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (categoria) {
        await categoria.destroy(); // Eliminar la categoria
        res.json({
          message: "Categoria eliminada",
        });
      } else {
        res.status(404).json({
          message: "Categoria no encontrada",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar la categoria",
        error: error.message,
      });
    }
  }
}

module.exports = CategoriaController;
