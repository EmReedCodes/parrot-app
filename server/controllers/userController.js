const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')

//@desc register new user
//@route POST /api/user
//access Public
const registerUser = asyncHandler(async (req, res) => {
      //need body data when we request this info
      const { name, email, password } = req.body

      if(!name || !email || !password) {
          res.status(400)
          throw new Error('Please add all fields')
      }
      //check if user exists
      const userExists = await User.findOne({email})
      if(userExists) {
          //send error
          res.status(400)
          throw new Error('User already exists')
      }

      //hash password
      const salt = await bcrypt.genSalt(10)
      //now that we have salt we cant hash pw
      const hashedPassword = await bcrypt.hash(password, salt)

      //create user
      const user = await User.create({
        name,
        email,
        password: hashedPassword
      })
      //check that now
      if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }

})

//@desc auth a user
//@route POST /api/user/login 
//access Public
const loginUser = asyncHandler(async (req, res) => {
    //getting the email and pw from input
    const {email, password} = req.body

    //check for user email
    const user = await User.findOne({email})
    //pw in db is hashed while login pw is not so we need dcrypt
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

//@desc register user data
//@route GET /api/user/self
//access private
const getSelf = asyncHandler(async (req, res) => {
    res.json({message: 'User data displayed'})
})


//generate JWT (token)
const generateToken = (id) => {
                 //({id}) we are setting id in the token here
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getSelf
}