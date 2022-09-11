const express = require('express')
const router = express.Router()
const authController = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')


//@desc
//registerUser is /api/user
router.post('/', authController.registerUser)
router.post('/login', authController.loginUser)
router.get('/self', protect,  authController.getSelf)



module.exports = router