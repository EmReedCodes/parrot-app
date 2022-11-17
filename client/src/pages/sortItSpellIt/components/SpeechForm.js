import { useDispatch } from "react-redux"
import { createWordForBank } from "../../../features/bankWord/bankWordSlice"
import { remove } from "../../../features/words/wordsSlice"


function SpeechForm({ word }) {
  console.log(word)

  //TODO: check if saidWord is already in wordBank if not use Modal if so disable
 
  const dispatch = useDispatch()


  const onSubmit = (e) => {
    dispatch(createWordForBank({word}))
    dispatch(remove(word))
  }

  return (
    <>
      <button onClick={e => onSubmit(e)}>Save</button>
    </>
  )
}

export default SpeechForm
