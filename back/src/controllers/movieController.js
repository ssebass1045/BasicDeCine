const {getMoviesService} = require('../services/movieService')

const movieController = async (req, res) => {
    const movies = await getMoviesService()
    res.status(200).send(movies)
}

module.exports = movieController

