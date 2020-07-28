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
router.get('/test', function(req, res){
    res.send("ai nimerit pe o pagina de test!")
})

router.get('/test2', function(req, res){
    res.send("Inca un test din git")
})

module.exports = router
