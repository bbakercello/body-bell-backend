const express = require('express');
const app = express();


require('./config/db.connection.js')

const MongoStore = require('connect-mongo')
const PORT = process.env.PORT || 4000

//CONTROLLER IMPORTS
const db = require('./models/Artist');



app.get('/', function (req,res) {
    res.send('<h1>Welcome to the Body Bell Database</h1>'
    )
})


app.listen(PORT, function (){
    console.log('Listening on Port:', `${PORT}`)
})