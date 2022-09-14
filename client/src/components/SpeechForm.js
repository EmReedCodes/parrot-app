
import { useDispatch } from "react-redux"
import { createSpeechWord } from "../features/speech/speechSlice"

function SpeechForm(props) {
  //finalWord is now being sent to db as req.body.finalWord
  const { finalWord, setFinalWord } = props
  //const [text, setText] = useState("")

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createSpeechWord({ finalWord }))
    
  }

  return (
    <>
      
      <button onClick={e => onSubmit(e)}>Save {finalWord}</button>
    </>
  )
}

export default SpeechForm
