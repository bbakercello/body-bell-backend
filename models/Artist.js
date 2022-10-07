const mongoose = require('mongoose')
require('../config/db.connection')

const artistSchema = new mongoose.Schema ({
  spotifyID: String,
  name:{type: String, required: [true, 'Need an artist name']},
  bio: String,
  instagram: String
})

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist