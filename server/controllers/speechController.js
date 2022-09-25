const DictaphoneWord = require('../models/DictaphoneModel')
const User = require('../models/UserModel')

//@desc Set word
//@route POST /api/speech
//@access

const saveWord = async (req, res) => {
    try {
        const word = await DictaphoneWord.create({
            //if changing input variable need to change name here too
            text: req.body.saidWord,
            //need id
            user: req.user.id,
        })
        res.status(200).json(word)
    } catch(err) {
        console.warn(err)
        res.status(400).send(err)
    }
}


module.exports = {
    saveWord
}