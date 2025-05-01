const PedidoDetalle = require('./pedidoDetalleModel.js');
const Pedido = require('./pedidoModel.js');
const Producto = require('./productoModel.js');
const Usuario = require('./usuarioModel.js');
const Categoria = require('./categoriaModel.js');
const sequelize = require('../database/conexion.js');
 

// Relaciones
// 🧍 Usuario → tiene muchos Pedidos
Usuario.hasMany(Pedido, { foreignKey: 'usuarioId' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// 📦 Producto → puede estar en muchos PedidoDetalle
Producto.hasMany(PedidoDetalle, { foreignKey: 'productoId' });
PedidoDetalle.belongsTo(Producto, { foreignKey: 'productoId' });

// 🧾 Pedido → tiene muchos Detalles
Pedido.hasMany(PedidoDetalle, { foreignKey: 'pedidoId' });
PedidoDetalle.belongsTo(Pedido, { foreignKey: 'pedidoId' });

// 🏷️ Categoria → tiene muchos Productos
Categoria.hasMany(Producto, { foreignKey: 'categoriaId' });
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });

module.exports = {
    sequelize,
    PedidoDetalle,
    Pedido,
    Producto,
    Usuario,
    Categoria
};




