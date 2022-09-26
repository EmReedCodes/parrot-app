const DictaphoneWord = require('../models/DictaphoneModel')
const User = require('../models/UserModel')



//will need to get words
//will need to post words
//will need to delete words
//will need to add priority


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
//@route POST /api/word/save
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


//@desc Set word
//@route DELETE /api/word/delete
//@access private
const deleteWord = async (req, res) => {
    try {
       
        console.log('Deleted Todo')
        res.json('Deleted It')
      } catch (err) {
        console.log(err)
      }
}



module.exports = {
    getWords,
    saveWord,
    deleteWord
}