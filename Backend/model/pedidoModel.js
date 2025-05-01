const {DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fechaPedido: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'enviado', 'entregado', 'cancelado'),
        allowNull: false,
    },
    direccionEnvio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'pedidos',
    timestamps: false,
});

module.exports = Pedido;