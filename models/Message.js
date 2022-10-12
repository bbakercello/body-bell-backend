const mongoose = require('mongoose')
require('../config/db.connection')

const messageSchema = new mongoose.Schema ({
  message: String,
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "Artist"
  },
},
  {timestamps: true})


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;