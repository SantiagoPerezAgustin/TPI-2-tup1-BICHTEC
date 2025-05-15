const {DataTypes} = require("sequelize");
const sequelize = require("../database/conexion.js");


const CategoriaMarca = sequelize.define(
    "CategoriaMarca",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoriaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        marcaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "categorias_marcas",
        timestamps: false,
    }
);

module.exports = CategoriaMarca;