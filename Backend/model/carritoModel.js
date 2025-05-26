const { DataTypes } = require("sequelize");
const sequelize = require("../database/conexion.js");

const Carrito = sequelize.define('Carrito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    actualizadoEn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'carritos',
    timestamps: false,
}); 

module.exports = Carrito;