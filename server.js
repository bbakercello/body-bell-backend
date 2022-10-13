const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/db.connection.js')

const MongoStore = require('connect-mongo')
const PORT = process.env.PORT || 4000

//CONTROLLER IMPORTS
const artistController = require('./controllers/artistController')
const albumController = require('./controllers/albumController')
const messageController = require('./controllers/message.Controller')

//DATABASE VARS
const db = require('./models');
const seedArtists = require('./models/seed_artists.js');
const seedAlbums = require('./models/seed_albums.js')
const seedMessages = require('./models/seed_messages.js')

app.get('/', function (req,res) {
    res.send('<h1>Welcome to the Body Bell Database</h1>'
    )
})


//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//CONTROLLER MIDDLEWARE
app.use('/artists',artistController);
app.use('/albums',albumController);
app.use('/messages',messageController)

//SEEDING DATA to MONGO
// seedArtists();
// seedAlbums();
seedMessages();



app.listen(PORT, function (){
    console.log('Listening on Port:', `${PORT}`)
})