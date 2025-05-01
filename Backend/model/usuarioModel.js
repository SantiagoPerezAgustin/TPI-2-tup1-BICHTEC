const {DataTypes} = require('sequelize');
const sequelize = require('../database/conexion.js');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol:{
        type: DataTypes.ENUM('user', 'admin', 'superadmin'),
        allowNull: false,
        defaultValue: 'user'
    },
}, {
    tableName: 'usuarios',
    timestamps: false,
})

module.exports = Usuario;