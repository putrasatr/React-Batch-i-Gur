var express = require('express');
var router = express.Router();
const makeid = require('../helpers/makeid')
const delFile = require('../helpers/deleteFile')
const Chat = require('../models/chat')

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const data = await Chat.find({})
    return res.status(200).json({
      data,
      message: "Success"
    })

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      data: false,
      message: "Failed",
    })
  }
});
router.post('/', async function (req, res, next) {
  try {
    await Chat.create(req.body)
    return res.status(200).json({
      data: true,
      message: "Success"
    })

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      data: false,
      message: "Failed",
    })
  }
});
module.exports = router;
