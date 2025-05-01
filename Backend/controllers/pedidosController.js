const Pedido = require("../model/pedidoModel.js"); 

class PedidosController {
  constructor() {}

  // Método para consultar la lista de pedidos
  async consultar(req, res) {
    try {
      const pedidos = await Pedido.findAll();
      res.json({
        message: "Lista de pedidos",
        pedidos,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar los pedidos",
        error: error.message,
      });
    }
  }

  // Método para crear un nuevo pedido
  async crear(req, res) {
    try {
      const { usuarioId, productoId, cantidad } = req.body;

      if (!usuarioId || !productoId || !cantidad || cantidad <= 0) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }

      if (isNaN(usuarioId) || isNaN(productoId)) {
        return res.status(400).json({
          message: "usuarioId y productoId deben ser números válidos",
        });
      }
  
      const nuevoPedido = await Pedido.create(req.body); // Crear un nuevo pedido
      res.status(201).json({
        message: "Pedido creado",
        pedido: nuevoPedido,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear el pedido",
        error: error.message,
      });
    }
  }

  // Método para consultar un pedido por ID
  async consultarPorId(req, res) {
    try {
      const { id } = req.params;
      const pedido = await Pedido.findByPk(id);
      if (pedido) {
        res.json({
          message: "Pedido encontrado",
          pedido,
        });
      } else {
        res.status(404).json({
          message: "Pedido no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar el pedido",
        error: error.message,
      });
    }
  }

  // Método para actualizar un pedido existente
  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { usuarioId, productoId, cantidad } = req.body;

      // Validar que se envíen los datos requeridos
      if (!usuarioId || !productoId || !cantidad || cantidad <= 0) {
        return res.status(400).json({
          message: "Faltan datos requeridos",
        });
      }

      if (isNaN(usuarioId) || isNaN(productoId)) {
        return res.status(400).json({
          message: "usuarioId y productoId deben ser números válidos",
        });
      }

      const [actualizado] = await Pedido.update(req.body, {
        where: { id },
      });

      if (actualizado) {
        const pedidoActualizado = await Pedido.findByPk(id);
        res.json({
          message: "Pedido actualizado",
          pedido: pedidoActualizado,
        });
      } else {
        res.status(404).json({
          message: "Pedido no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar el pedido",
        error: error.message,
      });
    }
  }

  // Método para eliminar un pedido
  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await Pedido.destroy({
        where: { id },
      });
      if (eliminado) {
        res.json({
          message: "Pedido eliminado",
        });
      } else {
        res.status(404).json({
          message: "Pedido no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar el pedido",
        error: error.message,
      });
    }
  }
}

module.exports = PedidosController;
