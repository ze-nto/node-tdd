const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const configDB = require('./src/config/database');
const routes = require('./src/routes/routes');

const app = express();
const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 8000;

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'Erro ao realizar a conexão com o Banco de dados...: '));

// if (configDB.util.getEnv('NODE_ENV') !== 'Test') {
//   app.use(morgan('combined'));
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Sejam bem-vindos a API' });
});

app.listen(port, () => {
  console.log(`Aplicação executando em ${host}:${port}`);
});

module.exports = app;
