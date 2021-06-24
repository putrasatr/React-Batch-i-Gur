const express = require('express');
const path = require('path');
const router = express.Router();
const News = require('../models/portalNews')
const makeid = require('../helpers/makeid')
const delFile = require('../helpers/deleteFile')

router.get('/list', async function (req, res, next) {
    try {
        console.log(req.query)
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

router.post('/add', async function (req, res, next) {
    try {
        const { title, content, category, like } = req.body
        var today = new Date();
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '_' + yyyy;
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        let foto = req.files.image;
        var filename = today + '_' + makeid(10) + '.jpg';
        foto.mv(path.join(__dirname, '..', 'public', 'images', 'news', filename))
        const created_date = Date.now()
        await News.create({ created_date, title, content, category, image: filename, like })
        return res.status(201).json({
            message: "Success"
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ data: false, message: 'There is Something Wrong' })
    }
});

router.delete('/delete/:id', async function (req, res, next) {
    try {
        let { id } = req.params
        const { image } = await News.findById(id)
        await News.findByIdAndDelete(id)
        let imagesDir = path.join(__dirname, `../public/images/news/${image}`)
        delFile(imagesDir)
        res.status(201).json({
            success: true,
            message: "news have been deleted",
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ data: false, message: 'There is Something Wrong' })
    }

})

module.exports = router
