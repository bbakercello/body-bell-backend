const mongoose = require('mongoose')
require('../config/db.connection')

const messageSchema = new mongoose.Schema ({
  message: String
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;