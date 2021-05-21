const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    created_date: String,
    category: String,
    title: String,
    image: String,
    content: String,
    like: Number
});

module.exports = mongoose.model('News', newsSchema)