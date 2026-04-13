const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Estilo = require('./Estilo');

const Filme = sequelize.define('Filme', {
  filme: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  ano: { type: DataTypes.STRING(4), allowNull: false },
  duracao: { type: DataTypes.STRING(3), allowNull: false },
  foto: { type: DataTypes.STRING },
  sinopse: { type: DataTypes.TEXT },
  video: { type: DataTypes.STRING }
});

Filme.belongsTo(Estilo, { foreignKey: 'estilo' });

module.exports = Filme;
