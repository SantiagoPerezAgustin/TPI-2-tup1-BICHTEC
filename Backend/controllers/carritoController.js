const Carrito = require("../model/carritoModel.js");
const CarritoDetalle = require("../model/carritoDetalleModel.js");
const Producto = require("../model/productoModel.js");

class CarritoController { 
  async obtenerCarritos(req, res){
    try {
      const carritos = await Carrito.findAll({
        include: [{ model: CarritoDetalle, include: [Producto] }]
      });
      res.json(carritos);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los carritos", error: error.message });
    }
  }

  async obtenerCarrito(req, res) {
    try {
      const { usuarioId } = req.params;
      const carrito = await Carrito.findOne({
        where: { usuarioId },
        include: [{ model: CarritoDetalle, include: [Producto] }]
      });
      if (!carrito) {
        return res.json({ usuarioId, productos: [] });
      }
      res.json(carrito);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el carrito", error: error.message });
    }
  }

  
  async agregarProducto(req, res) {
    try {
      const { usuarioId } = req.params;
      const { productoId, cantidad } = req.body;

      
      let carrito = await Carrito.findOne({ where: { usuarioId } });
      if (!carrito) {
        carrito = await Carrito.create({ usuarioId });
      }

      
      let detalle = await CarritoDetalle.findOne({
        where: { carritoId: carrito.id, productoId }
      });

      if (detalle) {
        
        detalle.cantidad += cantidad;
        await detalle.save();
      } else {
        
        await CarritoDetalle.create({
          carritoId: carrito.id,
          productoId,
          cantidad
        });
      }

      res.json({ message: "Producto agregado al carrito" });
    } catch (error) {
      res.status(500).json({ message: "Error al agregar producto", error: error.message });
    }
  }

  
  async actualizarCantidad(req, res) {
    try {
      const { usuarioId } = req.params;
      const { productoId, cantidad } = req.body;

      const carrito = await Carrito.findOne({ where: { usuarioId } });
      if (!carrito) return res.status(404).json({ message: "Carrito no encontrado" });

      const detalle = await CarritoDetalle.findOne({
        where: { carritoId: carrito.id, productoId }
      });
      if (!detalle) return res.status(404).json({ message: "Producto no encontrado en el carrito" });

      detalle.cantidad = cantidad;
      await detalle.save();

      res.json({ message: "Cantidad actualizada" });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar cantidad", error: error.message });
    }
  }

  
  async quitarProducto(req, res) {
    try {
      const { usuarioId, productoId } = req.params;

      const carrito = await Carrito.findOne({ where: { usuarioId } });
      if (!carrito) return res.status(404).json({ message: "Carrito no encontrado" });

      await CarritoDetalle.destroy({
        where: { carritoId: carrito.id, productoId }
      });

      res.json({ message: "Producto quitado del carrito" });
    } catch (error) {
      res.status(500).json({ message: "Error al quitar producto", error: error.message });
    }
  }

  
  async vaciarCarrito(req, res) {
    try {
      const { usuarioId } = req.params;

      const carrito = await Carrito.findOne({ where: { usuarioId } });
      if (!carrito) return res.status(404).json({ message: "Carrito no encontrado" });

      await CarritoDetalle.destroy({ where: { carritoId: carrito.id } });

      res.json({ message: "Carrito vaciado" });
    } catch (error) {
      res.status(500).json({ message: "Error al vaciar carrito", error: error.message });
    }
  }
}

module.exports = new CarritoController();