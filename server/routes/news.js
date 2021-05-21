var express = require('express');
var router = express.Router();
const News = require('../models/portalNews')

router.post('/add', async function (req, res, next) {
    try {
        const { title, content, category, image, like } = req.body
        const created_date = Date.now()
        await News.create({ created_date, title, content, category, image, like })
        return res.status(201).json({
            message: "Success"
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ data: false, message: 'There is Something Wrong' })
    }
});

router.get('/list', async function (req, res, next) {
    try {
        const data = await News.find({})
        
        return res.status(201).json({
            data,
            message: "Success"
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ data: false, message: 'There is Something Wrong' })
    }
});

module.exports = router
