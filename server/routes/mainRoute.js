const express = require('express')
const router = express.Router()
// const authController = require('../controllers/auth') 
// const homeController = require('../controllers/home')

//@desc
//@route
//access Private or Public 


//@route api/home
router.get('/', (req, res) => {
    res.status(200).json({msg: 'see home? do I need this?'})
})

module.exports = router