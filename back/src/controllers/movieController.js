
const {getMoviesService} = require('../services/movieService');
const { createMovieService } = require('../services/movieService');

const movieController = async (req, res) => {
    const movies = await getMoviesService()
    res.status(200).send(movies)
}

const createMovieController = async (req, res) => {
    try {
        const newMovie = await createMovieService(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    movieController,
    createMovieController
};

