const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')
//TODO: add passport maybe
//protect users route
//need next since its middleware

const protect = asyncHandler(async(req, res, next) => {
    let token 
    //sent as http header we need to check if it has auth header and starts with bearer
    //Bearer whatWeWantToProtecc
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from header
            token = req.headers.authorization.split(' ')[1] //so now we have [bearer infoToken]
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //get user from token so we can assign it to req.user
            req.user = await User.findById(decoded.id).select('-password') //dont need the pw here

            next()

        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized suckaa')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized no token')
    }
})

module.exports = { protect }