const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    singer: {
        type: String
    },
    url: {
        type: String
    },
    image: {
        type: String
    }
})


module.exports = mongoose.model('song', SongSchema)