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


// get specific post
router.get('/:id', async (req, res) => {
  try{
    res.json(await db.Message.findById(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;