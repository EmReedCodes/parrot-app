const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')
const { json } = require('express')
const nodemailer = require('nodemailer');

    

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

    //might need to send ID later
    if (user) {
          console.log(user)
          res.status(201).json({
              _id: user.id,
              name: user.name,
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



// //@desc register user data
// //@route GET /api/user/self
// //access private
  //do i need to generate new token for this??
//   const updatePassword = asyncHandler(async (req, res) => {
//     //need body data when we request this info
//     const { token, password } = req.body

//     if(!password) {
//         res.status(400)
//         throw new Error('Please add all fields')
//       }
//     //need to send over token or id to confirm its user?
    
//     //check if user ?
   
// // hash the password upon update
//     //hash password
//     const salt = await bcrypt.genSalt(10)
//     //now that we have salt we cant hash pw
//     const hashedPassword = await bcrypt.hash(password, salt)

//     //create user

//   //might need to send ID later
//   if (user) {
//         console.log(user)
//         res.status(201).json({
//             _id: user.id,
//             name: user.name,
//           token: generateToken(user._id)
//       })
//     } else {
//       res.status(400)
//       throw new Error('Invalid user data')
//     }

// })
  

//@desc register user data
//@route GET /api/user/self
//access private
const getSelf = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// const user = await User.findOne({email})
    //pw in db is hashed while login pw is not so we need dcrypt
    // if(user && (await bcrypt.compare(password, user.password))){
//  const {email, password} = req.body

// if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//@desc delete user data
//@route DELETE /api/user/delete
//access private
const deleteUser = asyncHandler(async (req, res) => {

    try {
        const user = await User.findOne({ email: req.user.email })
        console.log(user)
        //const { pwAttempt } = req.body
            console.log(req.body, 'req.body server')
    console.log(req.user, 'user server?')
   // const user = await User.findOne({ email })
    //console.log(user, 'finding the email')
        if (await bcrypt.compare(req.body.pwAttempt, user.password)) {
            console.log('experiment worked')
            const byeUser = User.findByIdAndDelete(req.user._id)
        } else {
            res.status(403).json({msg: 'not correct pw'})
        }
        res.status(201).json({msg: "deleted user"})
      } catch (err) {
        console.log(err)
      }

//     //const user = req.user._id
//     console.log(req.body, 'req.body server')
//     console.log(req.user, 'user server?')
//     const user = await User.findOne({ email })
//     console.log(user, 'finding the email')
//     const { pwAttempt } = req.body
//     console.log(pwAttempt)
//    // const pwTry = req.body.pwAttempt
//     console.log(pwTry)
//     if (req.user && await bcrypt.compare(pwAttempt, req.user.password)) {
//         User.findByIdAndDelete(req.user._id)
//         res.status(201).json({msg: "User Deleted"})
//     } else {
//         res.status(400)
//         throw new Error('Invalid Credentials')
//     }
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
    getSelf,
    deleteUser
    //updatePassword
}

