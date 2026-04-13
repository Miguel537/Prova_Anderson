const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('filmes_db', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
