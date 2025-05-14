const Marca = require("../model/marcaModel");

class MarcaController {
  constructor() {}

  async consultar(req, res) {
    try {
      const marcas = await Marca.findAll();
      res.json({
        message: "Lista de Marcas",
        marcas,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar las Marcas",
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
      const nuevaMarca = await Marca.create(req.body);
      res.status(201).json({
        message: "Marca creada",
        categoria: nuevaMarca,
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
      const marca = await Marca.findByPk(id);
      if (marca) {
        res.json({
          message: "Marca encontrada",
          marca,
        });
      } else {
        res.status(404).json({
          message: "Marca no encontrada",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar la Marca",
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
      const marca = await Marca.findByPk(id);
      if (marca) {
        await marca.update(req.body);
        res.json({
          message: "Marca actualizada",
          marca,
        });
      } else {
        res.status(404).json({
          message: "Marca no encontrada",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar la Marca",
        error: error.message,
      });
    }
  }

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const marca = await Marca.findByPk(id);
      if (marca) {
        await marca.destroy(); 
        res.json({
          message: "Marca eliminada",
        });
      } else {
        res.status(404).json({
          message: "Marca no encontrada",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar la Marca",
        error: error.message,
      });
    }
  }
}

module.exports = MarcaController;
