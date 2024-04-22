const express = require('express');
const router = require('./routes/');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// aca quiero utilizar el middleware de morgan
app.use(morgan("dev"));
// aca quiero utilizar el middleware de cors (restingir acceso)
app.use(cors());
// aca quiero utilizar el middleware de express por defecto (convierte los json en objetos)
app.use(express.json());

app.use(router);

module.exports = app;