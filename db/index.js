const mongoose = require('mongoose')

mongoose
    .connect('mongodb://mongosvc:27017/mystore', { useNewUrlParser: true })
    .catch(e => {
        console.log('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
