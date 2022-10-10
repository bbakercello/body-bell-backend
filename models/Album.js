const mongoose = require('mongoose')
require('../config/db.connection')

const albumSchema = new mongoose.Schema ({
  spotifyID: String,
  artistID: String,
  releaseDate: String,
  images: String,
  Genre: String
})

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;