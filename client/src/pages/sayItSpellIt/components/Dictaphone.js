import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { toast } from "react-toastify"
import { update } from "../../../features/words/wordsSlice"

const Dictaphone = () => {

  //welllll I finally have the value stored in an array but how to get it to other components ?
  //const [letterArray, setLetterArray] = useState([])

  // const { word, setWord, finalWord, setFinalWord } = props
  const { remove } = useSelector(state => state.word)
  const [saidWord, setSaidWord] = useState("")
 // const word = useSelector((state) => state.word)
  const dispatch = useDispatch()
  

  const {
    // transcript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition()
  //logic
  //need to export sliced out letters below in const letters
  //I can get both values I need from the one function how to export both?

  // useEffect(() => {
    
  //   const calculateSlicedWord = () => {
   
     
  //     if (finalTranscript !== "") {
  //       const word = finalTranscript.split("")
  //       const removeLetters = word.map(char => (Math.random() > 0.7 ?  " " : char))
  //       console.log(removeLetters)
  //       return removeLetters
  //     }
  //   }

       


  //   setFinalWord(finalTranscript)
  //   setWord(calculateSlicedWord())
  // }, [finalTranscript, setWord, setFinalWord])
  
  useEffect(() => {
    
   
   
     
    if (finalTranscript !== "") {
      setSaidWord(finalTranscript)
     
        
    }
   
    //dispatch(register(authData))
  
    //   setFinalWord(finalTranscript)
    //   setWord(calculateSlicedWord())
    dispatch(update({ saidWord }))
  
  }, [finalTranscript, saidWord, setSaidWord, dispatch])



  if (!browserSupportsSpeechRecognition) {
    console.log("Try chrome")
    return toast.error("Unavailable in this browser")
  }
  if (!isMicrophoneAvailable) {
    return toast.error("Microphone must be on")
  }
  //TODO: fix reset on dispatch
  const resetWord = () => {
    resetTranscript()
    //dont think its resetting
    dispatch(remove({ saidWord }))
    
}

//onClick={() => speechHandler(saidWord)
  return (
    <div className="speech">
      
     
      {!finalTranscript &&
        <>
      <h3>Start by saying a word</h3>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
       </>
      }
      <button onClick={() => resetWord()}>Reset</button>
    </div>
  )
}

export default Dictaphone
