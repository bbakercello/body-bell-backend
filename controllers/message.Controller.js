const express = require('express');
const router = express.Router();
const db = require('../models');
const Message  = require('../models/Message.js')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))


//get all
router.get('/', async (req, res) => {
  try {
    res.json(await Message.find({}))
  }
  catch (e) {
    console.log(e)
  }
})


// get specific Message
router.get('/:id', async (req, res) => {
  try{
    res.json(await db.Message.findById(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// update message
router.put('/:id', async (req, res) => {
  try {
    res.json(await db.Message.findByIdAndUpdate(
      req.params.id, 
      req.body,
      {new: true}
      ));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// delete message
router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await db.Message.findByIdAndUpdate(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})


module.exports = router;