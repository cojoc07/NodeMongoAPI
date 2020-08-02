const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')
const UserCtrl = require('../controllers/user-controller')
const TutorialCtrl = require('../controllers/tutorial-ctrl')

const router = express.Router()

//movies
router.get('/movies', MovieCtrl.getMovies)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)

//users
router.get('/users', UserCtrl.getUsers)

//tutorials
router.get('/tutorials', TutorialCtrl.getTutorials)
router.get('/tutorial/:id', TutorialCtrl.getTutorialById)
router.post('/tutorial', TutorialCtrl.createTutorial)
router.put('/tutorial/:id', TutorialCtrl.updateTutorial)
router.delete('/tutorial/:id', TutorialCtrl.deleteTutorial)

router.get('/test', function(req, res){
    res.send("ai nimerit pe o pagina de test!")
})



module.exports = router
