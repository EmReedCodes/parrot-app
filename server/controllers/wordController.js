const { text } = require("express")
const DictaphoneWord = require("../models/DictaphoneModel")
const User = require("../models/UserModel")

//@desc get Words
//@route get /api/word
//@access private
//const agg = DictaphoneWord.aggregate([
//     { userId: req.body.id }
// ]).sample(10);

const getWords = async (req, res) => {
  try {
    const randomItems = await DictaphoneWord.aggregate([
      {
        $match: {
          user: req.user._id
        }
      },
      {
        $sample: {
          size: 10
        }
      }
    ]).exec()

    res.status(200).json(randomItems)
  } catch (err) {
    console.log(err)
  }
}

//@desc Set word
//@route POST /api/word/
//@access private
const saveWord = async (req, res) => {
  try {
    if (req.body.list) {
      const words = req.body.list
      const wordsArray = words.map(item => {
        return {
          text: item,
          user: req.user._id
        }
      })

      const sendWords = await DictaphoneWord.insertMany(wordsArray)

      res.status(200).json(sendWords)
    }
    if (req.body.word) {
      const word = await DictaphoneWord.create({
        //if changing input variable need to change name here too
        text: req.body.word,
        //need id
        user: req.user._id
      })
      res.status(200).json(word)
    }
  } catch (err) {
    console.warn(err)
    res.status(400).send(err)
  }
}

//@desc replace word
//@route PUT /api/word/:_id
//@access private
//id from collection
const replaceWord = async (req, res) => {
  try {
    const replace = await DictaphoneWord.findOneAndUpdate(
      { _id: req.body.id },
      { text: req.body.text }
    )
    res.status(200).json(replace)
  } catch (err) {
    res.status(400).send(err)
  }
}

//@desc delete word
//@route DELETE /api/word/:_id
//@access private
//id from collection
const deleteWord = async (req, res) => {
  try {
    const word = await DictaphoneWord.findOneAndDelete({ _id: req.params._id })
    res.status(200).json({ _id: req.params._id })
  } catch (err) {
    console.log(err)
  }
}

//@desc get all words
//@route get /api/word/
//@access private
const allWords = async (req, res) => {
  try {
    //is there a  way to only get the text from user id without map?
    const words = await DictaphoneWord.find({ user: req.user._id })
    //const justWords = words.map(item => item.text).sort()
    res.status(200).json(words)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getWords,
  allWords,
  saveWord,
  replaceWord,
  deleteWord
}
