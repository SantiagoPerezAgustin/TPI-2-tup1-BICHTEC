const { DataTypes } = require("sequelize");
const sequelize = require("../database/conexion.js");

const Marca = sequelize.define(
  "Marca",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "marcas",
    timestamps: false,
  }
);

module.exports = Marca;
