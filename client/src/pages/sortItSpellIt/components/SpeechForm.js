import { useSelector, useDispatch } from "react-redux"
import { createWordForBank } from "../../../features/bankWord/bankWordSlice"
import { remove } from "../../../features/words/wordsSlice"


function SpeechForm(props) {
  //finalWord is now being sent to db as req.body.finalWord
  //TODO: check if saidWord is already in wordBank if not use Modal if so disable
  const { saidWord } = useSelector(state => state.word)
  const dispatch = useDispatch()
  console.log(saidWord)


  const onSubmit = (e) => {
    dispatch(createWordForBank({saidWord}))
    dispatch(remove(saidWord))
  }

  return (
    <>
      <button onClick={e => onSubmit(e)}>Save</button>
    </>
  )
}

export default SpeechForm
