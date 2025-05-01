const {DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Categoria;