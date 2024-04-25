
const {Router} = require('express')
const movieController = require('../controllers/movieController')

const movieRouter = Router()

movieRouter.get('/', movieController.movieController);
movieRouter.post('/', movieController.createMovieController);

module.exports = {movieRouter};