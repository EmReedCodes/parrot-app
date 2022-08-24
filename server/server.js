require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = 5004
const app = express()

app.get('/', (req, res) => {
    app.json({msg: 'Ahoy matey'})
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || PORT, () => {
            console.log('listening and connected')
        })
    })
    .catch((error) => {
        console.warn(error)
    })
