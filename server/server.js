const dotenv = require('dotenv').config()
const express = require('express')
const colors = require('colors');
const mainRoutes = require('./routes/mainRoute')
const userRoutes = require('./routes/userRoute')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5004


connectDB()

const app = express()

//middleware
app.use(express.json())
//in order to use body data (req.body) set to false maybe
app.use(express.urlencoded({ extended: false })) //trav uses false?


//my home page where Ill do my auth 
//@desc sending to my routes
app.use('/api/home', mainRoutes)
app.use('/api/user', userRoutes)

//this will overwrite the default errors
app.use(errorHandler)


app.listen(PORT,  () => {
    console.log(`Server is running on port ${PORT}`)
})    
