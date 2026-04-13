const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estilo = sequelize.define('Estilo', {
  estilo: { type: DataTypes.TINYINT, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING(15), allowNull: false }
});

module.exports = Estilo;
