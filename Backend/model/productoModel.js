const {DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagenUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'productos',
    timestamps: false,
});

module.exports = Producto;