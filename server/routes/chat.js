var express = require('express');
var router = express.Router();
const makeid = require('../helpers/makeid')
const delFile = require('../helpers/deleteFile')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const data = await Chat.find({})
    return res.status(200).json({
      data,
      message:"Success"
    })
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      data:false,
      message:"Failed",
    })
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
