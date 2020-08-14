const express = require('express')
const bodyParser = require('body-parser')
const connectEnsureLogin = require('connect-ensure-login');
const cors = require('cors')
const db = require('./db')
const defaultRouter = require('./routes/default-router')
require('dotenv').config()


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const expressSession = require('express-session')({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false
  });

app.use(expressSession)



db.on('error', console.error.bind(console, 'Eroare la conectarea cu MongoDB:'))

app.get('/', (req, res) => {
    res.send('Hello World!\n')
})

app.use('/api', defaultRouter)
app.use(passport.initialize());
app.use(passport.session());

app.post('/login2', (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.redirect('/login2?info=' + info);
      }
  
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
  
        return res.redirect('/');
      });
  
    })(req, res, next);
  });
  
  app.get('/login2',
    (req, res) => res.send('Pagina de logare.')
  );
  
  app.get('/',
    connectEnsureLogin.ensureLoggedIn(),
    (req, res) => res.send('Logat cu succes! Bun venit!')
  );
  
  app.get('/private',
    connectEnsureLogin.ensureLoggedIn(),
    (req, res) => res.send('Pagina private! Bun venit!')
  );
  

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
