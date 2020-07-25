const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')
const UserCtrl = require('../controllers/user-controller')

const router = express.Router()

router.get('/movies', MovieCtrl.getMovies)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)

router.get('/users', UserCtrl.getUsers)

module.exports = router
