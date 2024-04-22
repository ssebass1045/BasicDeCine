const {getMoviesService} = require('../services/movieService')

const movieController = (req, res) => {
    const movies = getMoviesService()
    res.status(200).send(movies)
}

module.exports = movieController

