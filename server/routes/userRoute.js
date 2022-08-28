const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getSelf } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')


//@desc
//registerUser is /user
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/self', protect,  getSelf)



module.exports = router