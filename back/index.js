require("dotenv").config()
const app = require("./src/server");
const dbConexion = require("./src/config/dbConexion"); 

const { PORT } = process.env

dbConexion()
.then((res) => {
    app.listen(PORT, () => {
        console.log(`servidor escuchando en el puerto ${PORT}`)

});
})
.catch((err) => {
    console.log("Error al conectar a la  base de datos");
});