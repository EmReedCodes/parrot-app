const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DictaphoneWords = new Schema ({
    type: String,
    type: Date
}, {timestamps: true})

module.exports = mongoose.model('DictaphoneWord', DictaphoneWords)