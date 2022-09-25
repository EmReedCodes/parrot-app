
import { useSelector,useDispatch } from "react-redux"
import { createSpeechWord } from "../features/speech/speechSlice"
//import { wordReducer } from ''
function SpeechForm(props) {
  //finalWord is now being sent to db as req.body.finalWord
  //const { finalWord, setFinalWord } = props
  //const [text, setText] = useState("")
  const { saidWord } = useSelector(state => state.word)
  const dispatch = useDispatch()
  console.log(saidWord)
  const onSubmit = e => {
    e.preventDefault()

     dispatch(createSpeechWord({ saidWord }))
    // dispatch()
   console.log(saidWord)
  }

  return (
    <>
      
      <button onClick={e => onSubmit(e)}>Save</button>
    </>
  )
}

export default SpeechForm
