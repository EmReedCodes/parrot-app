const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DictaphoneSchema = new Schema ({
    user: { //want type to be objectID
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //need to know which model does this id pertain to
    },
    text : {
        type: String,
        required: [true, 'Please speak again']
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Dictaphone', DictaphoneSchema)