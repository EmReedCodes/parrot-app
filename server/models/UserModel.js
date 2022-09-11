const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add name']
    }
},
    { timestamps: true },
    //{ collection: 'userAuth' } alright didnt work.... why are all my collections named test >:(
)

module.exports = mongoose.model('User', UserSchema)