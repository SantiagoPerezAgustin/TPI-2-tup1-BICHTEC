const PedidoDetalle = require('./pedidoDetalleModel.js');
const Pedido = require('./pedidoModel.js');
const Producto = require('./productoModel.js');
const Usuario = require('./usuarioModel.js');
const Categoria = require('./categoriaModel.js');
const Marca = require('./marcaModel.js');
const CategoriaMarca = require('./categoriaMarcaModel.js');
const Carrito = require('./carritoModel.js');
const CarritoDetalle = require('./carritoDetalleModel.js');
const sequelize = require('../database/conexion.js');
 

// Relaciones
// Usuario → tiene muchos Pedidos
Usuario.hasMany(Pedido, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Usuario.hasMany(Carrito, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
Carrito.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Carrito.hasMany(CarritoDetalle, { foreignKey: 'carritoId', onDelete: 'CASCADE' });
CarritoDetalle.belongsTo(Carrito, { foreignKey: 'carritoId' });

Producto.hasMany(CarritoDetalle, { foreignKey: 'productoId' });
CarritoDetalle.belongsTo(Producto, { foreignKey: 'productoId' });

//  Producto → puede estar en muchos PedidoDetalle
Producto.hasMany(PedidoDetalle, { foreignKey: 'productoId' });
PedidoDetalle.belongsTo(Producto, { foreignKey: 'productoId' });

//  Pedido → tiene muchos Detalles
Pedido.hasMany(PedidoDetalle, { foreignKey: 'pedidoId', onDelete: 'CASCADE' });
PedidoDetalle.belongsTo(Pedido, { foreignKey: 'pedidoId' });

//  Categoria → tiene muchos Productos
Categoria.hasMany(Producto, { foreignKey: 'categoriaId' });
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId' });

// Relación muchos a muchos entre Categoria y Marca
Categoria.belongsToMany(Marca, {
    through: CategoriaMarca,
    foreignKey: 'categoriaId',
    otherKey: 'marcaId',
    as: 'marcas',
});

Marca.belongsToMany(Categoria, {
    through: CategoriaMarca,
    foreignKey: 'marcaId',
    otherKey: 'categoriaId',
    as: 'categorias',
});

//  Marca → tiene muchos Productos
Marca.hasMany(Producto, { foreignKey: 'marcaId' });
Producto.belongsTo(Marca, { foreignKey: 'marcaId' });



module.exports = {
    sequelize,
    PedidoDetalle,
    Pedido,
    Producto,
    Usuario,
    Categoria,
    Marca,
    CategoriaMarca,
};




