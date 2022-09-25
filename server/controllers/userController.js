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

//@desc register user data
//@route GET /api/user/self
//access private
//need to reassign new token??? 
// function forgotPassword(req, res) {
//     if(process.env.GOOGLE_APP_EMAIL && process.env.GOOGLE_APP_PW) {
//       const email = req.body.email
//       User.findOne({email}, (err, user) => {
//         if (err || !user) {
//           return res.status(400).json({error: 'User with this email does not exist'})
//         }
        
//         const token = jwt.sign({_id: user._id}, process.env.RESET_PASSWORD_KEY, {expiresIn: '15m'})
    
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               type: 'OAuth2',
//               user: process.env.MAIL_USERNAME,
//               pass: process.env.MAIL_PASSWORD,
//               clientId: process.env.OAUTH_CLIENTID,
//               clientSecret: process.env.OAUTH_CLIENT_SECRET,
//               refreshToken: process.env.OAUTH_REFRESH_TOKEN
//             }
//           });
          

        
//         const data = {
//           to: email,
//           subject: 'Reset Account Password Link',
//           html: `
//           <h3>Please click the link below to reset your password</h3>
//           <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>
//           `,
//         }
        
//         return user.updateOne({resetPassword: token}, (err, user) => {
//           if (err) {
//             return res.status(400).json({error: 'Reset password link error'})
//           } else {
//             transporter.sendMail(data, function(error, body) {
//               if (error) {
//                 return res.status(400).json({error: error.message})
//               }
//               return res.status(200).json({message: 'Email has been sent, please follow the instructions'})
//             })
//           }
//         })
//       })
//     } else{
//       return res.status(400).json({error: 'You have not set up an account to send an email or a reset password key for jwt'})
//     }
// }

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
    
//     //check if user exists
//     const userExists = await User.findOne({email})
//     if(userExists) {
//         //send error
//         res.status(400)
//         throw new Error('User already exists')
//     }
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
    //updatePassword
}

