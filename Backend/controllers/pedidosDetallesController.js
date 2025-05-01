const PedidoDetalle = require("../model/pedidoDetalleModel.js");

class PedidosDetallesController {
  constructor() {}

  async consultar(req, res) {
    try {
      const pedidosDetalles = await PedidoDetalle.findAll();
      res.json({
        message: "Lista de detalles de pedidos",
        pedidosDetalles,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar los detalles de pedidos",
        error: error.message,
      });
    }
  }

  async crear(req, res) {
    try {
      const { pedidoId, productoId, cantidad } = req.body;
      if (!pedidoId || !productoId || !cantidad || cantidad <= 0) {
        return res.status(400).json({
          message: "Faltan datos requeridos o la cantidad es inválida",
        });
      }
      if (isNaN(pedidoId) || isNaN(productoId)) {
        return res.status(400).json({
          message: "pedidoId y productoId deben ser números válidos",
        });
      }

      const nuevoPedidoDetalle = await PedidoDetalle.create(req.body); // Crear un nuevo pedido
      res.status(201).json({
        message: "Pedido detalle creado",
        pedidoDetalle: nuevoPedidoDetalle,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear el pedido detalle",
        error: error.message,
      });
    }
  }

  async consultarPorId(req, res) {
    try {
      const { id } = req.params;
      const pedidoDetalle = await PedidoDetalle.findByPk(id);
      if (pedidoDetalle) {
        res.json({
          message: "Pedido detalle encontrado",
          pedidoDetalle,
        });
      } else {
        res.status(404).json({
          message: "Pedido detalle no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al consultar el pedido detalle",
        error: error.message,
      });
    }
  }

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { pedidoId, productoId, cantidad } = req.body;
      if (!pedidoId || !productoId || !cantidad || cantidad <= 0) {
        return res.status(400).json({
          message: "Faltan datos requeridos o la cantidad es inválida",
        });
      }
      if (isNaN(pedidoId) || isNaN(productoId)) {
        return res.status(400).json({
            message: "pedidoId y productoId deben ser números válidos",
        });
    }

      const [actualizado] = await PedidoDetalle.update(req.body, {
        where: { id },
      });
      if (actualizado) {
        const pedidoDetalleActualizado = await PedidoDetalle.findByPk(id);
        res.json({
          message: "Pedido detalle actualizado",
          pedidoDetalle: pedidoDetalleActualizado,
        });
      } else {
        res.status(404).json({
          message: "Pedido detalle no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al actualizar el pedido detalle",
        error: error.message,
      });
    }
  }
  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await PedidoDetalle.destroy({
        where: { id },
      });
      if (eliminado) {
        res.json({
          message: "Pedido detalle eliminado",
        });
      } else {
        res.status(404).json({
          message: "Pedido detalle no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al eliminar el pedido detalle",
        error: error.message,
      });
    }
  }
}

module.exports = PedidosDetallesController;
