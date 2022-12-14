const express = require('express')
const router = express.Router()
const wordController = require('../controllers/wordController')

const { protect } = require('../middleware/authMiddleware')

//@desc
//registerUser is /api/word
router.get('/', protect, wordController.getWords)
router.get('/all', protect, wordController.allWords)
router.post('/', protect, wordController.saveWord)
router.patch('/update', protect, wordController.replaceWord)
router.delete('/:_id', protect, wordController.deleteWord)


module.exports = router