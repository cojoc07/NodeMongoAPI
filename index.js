const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const defaultRouter = require('./routes/default-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'Eroare la conectarea cu MongoDB:'))

app.get('/', (req, res) => {
    res.send('Hello World!\n')
})

app.use('/api', defaultRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
