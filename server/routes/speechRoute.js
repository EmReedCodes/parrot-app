const express = require('express')
const router = express.Router()
const speechController = require('../controllers/speechController')

const { protect } = require('../middleware/authMiddleware')

//@desc
//registerUser is /api/speech
router.post('/', protect, speechController.saveWord)


module.exports = router