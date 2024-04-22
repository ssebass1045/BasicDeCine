const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');

const app = express();

// aca quiero utilizar el middleware de morgan
app.use(morgan('dev'))
// aca quiero utilizar el middleware de cors (restingir acceso)
app.use(cors())
// aca quiero utilizar el middleware de express por defecto (convierte los json en objetos)
app.use(express.json());

app.use(express.static('public'))


app.use(router);

module.exports = app;