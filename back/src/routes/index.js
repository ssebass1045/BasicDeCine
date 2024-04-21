// aqui vamos a definir las rutas a traves de las cuelaes nos podemos comunicar

// tengo definida la solicitud a GET /movies => controlador

const {Router} = require("express");
const movieRouter = require("./movieRouter");



const router = Router();

router.use("/movies", movieRouter);



module.exports = router;