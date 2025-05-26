const {DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');

const CarritoDetalle = sequelize.define('CarritoDetalle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    carritoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
}, {
    tableName: 'carrito_detalle',
    timestamps: false,
});

module.exports = CarritoDetalle;