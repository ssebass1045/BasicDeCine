
const Movies = require('../utils/classMovies');
const Movie = require('../models/Movie');

module.exports = {
    getMoviesService: async () => {
      try {
        const movies = await Movie.find()
        return movies
        
      } catch (error) {
        throw error.message
      }
          
    }
}


// module.exports = {
//     getMovies: async () => {
//         try {
            
//             // Transformamos los datos recibidos en instancias de la clase Movie
//             //const movies = moviesData.map(movie => new Movie(movie.title, movie.poster, movie.director));
//             const movies = moviesDB.map(movie => new Movie(movie));

            
            
//             return movies
//         } catch (error) {
//             // Manejo de errores en caso de que falle la solicitud HTTP
            
//             throw new Error("Error al obtener las películas: " + error.message);
//         }
//     },
// };
