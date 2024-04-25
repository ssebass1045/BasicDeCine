require("dotenv").config()
const mongoose = require('mongoose');

const {MONGO_URI} = process.env

const dbConexion = async () => {
//aca hacemos la concexion a la base de datos
//URL mongodb
await mongoose.connect(`${MONGO_URI}`);

//console.log(process.env.MONGO_URI);


};

module.exports = dbConexion;