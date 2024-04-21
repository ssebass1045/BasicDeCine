// en este modulo van a estar las funciones que establece la LOGICA DE NEGOCIO de cada una de las rutas


// para esa ruta GET/ movies => 

//vamos a ir a la base de datos a pedir la informacion de las peliculas
// y responder al cliente con la informacion obtenida.


const movieController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud para obtener datos de las peliculas");
};

module.exports = {
    movieController, 
   
};