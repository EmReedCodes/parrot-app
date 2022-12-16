const path = require('path')
const dotenv = require('dotenv').config()
const express = require('express')
const colors = require('colors');
const wordRoutes = require('./routes/wordRoute')
const userRoutes = require('./routes/userRoute')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5004


connectDB()

const app = express()

//middleware
app.use(express.json())
//in order to use body data (req.body) set to false maybe
app.use(express.urlencoded({ extended: false })) //try both

//@desc sending to my routes
app.use('/api/word', wordRoutes)
app.use('/api/user', userRoutes)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/index.html')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'client', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  



//this will overwrite the default errors
app.use(errorHandler)


app.listen(PORT,  () => {
    console.log(`Server is running on port ${PORT}`)
})    
