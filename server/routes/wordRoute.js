const express = require('express')
const router = express.Router()
const wordController = require('../controllers/wordController')

const { protect } = require('../middleware/authMiddleware')

//@desc
//registerUser is /api/word
router.get('/', protect, wordController.getWords)
router.post('/', protect, wordController.saveWord)
router.delete('/', protect, wordController.deleteWord)


module.exports = router