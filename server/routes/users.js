var express = require('express');
var router = express.Router();
const Users = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;

/* -----< *** USER LOGIN  && REGISTER *** >----- */

router.post('/register', async function (req, res, next) {
  try {
    const { id, email, password } = req.body;

    const token = jwt.sign({ email }, 'my_secret_key');

    const data = await Users.findOne({ email })
    const hash = await bcrypt.hash(password, saltRounds)
    await Users.create({ id, email, password: hash, token })

    if (data) return res.status(200).json({ data: false, message: 'Email Already Exists' })
    return res.status(201).json({
      data: {
        email
      },
      token,
      message: "You're Welcome"
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({ data: false, message: 'There is Something Wrong' })
  }
});

router.post('/login', async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const data = await Users.findOne({ email })
    if (!data) return res.status(200).json({ data: false, message: "User Not Found" })
    const result = await bcrypt.compare(password, data.password)
    if (!result) return res.status(200).json({ data: false, message: 'Email Or Username is wrong' })
    const token = jwt.sign({ email }, 'my_secret_key');
    await Users.updateMany({ email }, { $set: { token } })
    res.status(201).json({
      data: {
        email
      },
      token,
      message: "Success Logging In"
    })
  } catch (error) {
    console.log(error)
    return res.status(200).json({ data: false, message: 'There is Something Wrong' })
  }
});

/* -----< *** END USER LOGIN && REGISTER *** >----- */

module.exports = router;