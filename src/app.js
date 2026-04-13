const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const filmeRoutes = require('./routes/filmeRoutes');
app.use('/filmes', filmeRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
