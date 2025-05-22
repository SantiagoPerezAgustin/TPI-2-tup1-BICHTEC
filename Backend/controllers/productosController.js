const Producto = require("../model/productoModel.js");

class ProductosController {
  constructor() {}

  async consultar (req, res) {
    try {
      const productos = await Producto.findAll();
      res.json({
        message: "Lista de productos",
        productos,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar los productos",
        error: error.message,
      });
    }
  }

  async crear(req, res) {
    try {
      const { productoId, nombre, precio, descripcion, imagenUrl } = req.body;
      if (!nombre || !precio) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }
      const nuevoProducto = await Producto.create(req.body); // Crear un nuevo producto
      res.status(201).json({
        message: "Producto creado",
        producto: nuevoProducto,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear el producto",
        error: error.message,
      });
    }
  }

  async consultarPorId(req, res) {
    try {
      const { id } = req.params;
      const producto = await Producto.findByPk(id);
      if (producto) {
        res.json({
          message: "Producto encontrado",
          producto,
        });
      } else {
        res.status(404).json({
          message: "Producto no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar el producto",
        error: error.message,
      });
    }
  }

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { nombre, precio, descripcion, imagenUrl } = req.body;
      if (!nombre || !precio) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }
      const [actualizado] = await Producto.update(req.body, {where: {id}});
      if (actualizado) {
        const productoActualizado = await Producto.findByPk(id);
        res.json({
          message: "Producto actualizado",
          producto: productoActualizado,
        });
      } else {
        res.status(404).json({
          message: "Producto no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar el producto",
        error: error.message,
      });
    }
  }

  async eliminar(req, res){
    try {
      const {id} = req.params;
      const eliminado = await Producto.destroy({where: {id}});
      if(eliminado){
        res.json({
          message: "Producto eliminado",
        });
      }else{
        res.status(404).json({
          message: "Producto no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar el producto",
        error: error.message,
      })
    }
  }
}

module.exports = ProductosController;
