const mongoose = require('mongoose');

const Chat = new mongoose.Schema({
    created_date: String,
    sender: String,
    message: String,
    image: String,
    link: String,
});

module.exports = mongoose.model('Chat', Chat)