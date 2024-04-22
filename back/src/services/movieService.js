const axios = require("axios");

class Movie {
    constructor(title, poster, director) {
        if (!title || !poster || !director) {
            throw new Error("Title, poster, and director are required.");
        }
        this.title = title;
        this.poster = poster;
        this.director = director;
    }
}

module.exports = {
    getMovies: async () => {
        try {
            const response = await axios.get("https://students-api.up.railway.app/movies");
            const moviesData = response.data;
            
            // Transformamos los datos recibidos en instancias de la clase Movie
            const movies = moviesData.map(movie => new Movie(movie.title, movie.poster, movie.director));
            
            return movies;
        } catch (error) {
            // Manejo de errores en caso de que falle la solicitud HTTP
            throw new Error("Error al obtener las películas: " + error.message);
        }
    },
};
