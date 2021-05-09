var express = require('express');
var router = express.Router();
const Users = require('../models/users')

// /* -----< *** USER LOGIN *** >----- */

// router.post('/users/login', async (req, res, next) => {
//     try {
//         var { email, password, token } = req.body;
//         const data = await Users.create({ email, password, token })
//         res.status(201).json({
//             isSuccess: true,
//             message: "Logging in",
//             data
//         })
//     } catch (error) {
//         res.status(500).json({
//             isSuccess: false,
//             message: "Failed To Logged in",
//             error
//         })
//     }
// });

// /* -----< *** END USER LOGIN *** >----- */

module.exports = router;