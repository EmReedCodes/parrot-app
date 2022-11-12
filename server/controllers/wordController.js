const DictaphoneWord = require('../models/DictaphoneModel')
const User = require('../models/UserModel')


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
    ]).exec();
    
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
        console.log(req.user)
        const word = await DictaphoneWord.create({
            //if changing input variable need to change name here too
            text: req.body.saidWord,
            //need id
            user: req.user._id,
        })
        console.log(word)
       res.status(200).json(word)
    } catch(err) {
        console.warn(err)
        res.status(400).send(err)
    }
}


//@desc delete word
//@route DELETE /api/word/:_id
//@access private
//id from collection
const deleteWord = async (req, res) => {
    try {
        console.log(req.params._id)
    
        const word = await DictaphoneWord.findOneAndDelete({ _id: req.params._id })
        console.log('Deleted Todo')
        res.status(200).json({_id: req.params._id})
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
        const justWords = words.map(item => item.text).sort()
        res.status(200).json(justWords)
    } catch (err) {
        console.log(err)
    }
}



module.exports = {
    getWords,
    allWords,
    saveWord,
    deleteWord
}