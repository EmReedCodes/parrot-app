const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getSelf } = require('../controllers/userController')


//@desc
//registerUser is /user
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/self', getSelf)



module.exports = router