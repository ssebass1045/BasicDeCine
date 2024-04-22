
const Movies = require('../utils/classMovies');

const moviesDB = [
    {
      "title": "Guardians of the Galaxy Vol. 2",
      "year": 2017,
      "director": "James Gunn",
      "duration": "2h 16min",
      "genre": [
        "Action",
        "Adventure",
        "Comedy"
      ],
      "rate": 7.7,
      "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
      "title": "Star Wars: Episode IV - A New Hope",
      "year": 1977,
      "director": "George Lucas",
      "duration": "2h 1min",
      "genre": [
        "Action",
        "Adventure",
        "Fantasy",
        "Sci-Fi"
      ],
      "rate": 8.7,
      "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year": 2001,
      "director": "Peter Jackson",
      "duration": "2h 58min",
      "genre": [
        "Action",
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "rate": 8.8,
      "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    }
  ]

module.exports = {
    getMoviesService: () => {
            const newMovie = moviesDB.map(movie => new Movies(movie))
            return newMovie
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
