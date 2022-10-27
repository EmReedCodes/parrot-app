import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
//import { useSelector } from "react-redux"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { toast } from "react-toastify"
import { update } from "../../../features/words/wordsSlice"
import { FaMicrophoneAltSlash } from 'react-icons/fa'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";

const Dictaphone = () => {

  //why no update? i is confused here me...
  //this remove needs to be saidWord???
  // const { remove } = useSelector(state => state.word)

  //const word = useSelector((state) => state.word)
  const [saidWord, setSaidWord] = useState("")
 // const word = useSelector((state) => state.word)
  const dispatch = useDispatch()
  

  const {
    // transcript,
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition()
  //logic
  //need to export sliced out letters below in const letters
  //I can get both values I need from the one function how to export both?

  
  useEffect(() => {
      
    if (finalTranscript !== "") {
      setSaidWord(finalTranscript.toLowerCase())
    }
 
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
//   const resetWord = () => {
    
//     resetTranscript()
//     dispatch(remove( {saidWord}))
//     //dont think its resetting
//     //TypeError: remove is not a function

    
// }

//onClick={() => speechHandler(saidWord)
  return (
    <>
      
        
          {listening ?
            <IconContext.Provider value={{ className: "microphone-on" }}>
              <FaMicrophoneAlt />
            </IconContext.Provider>
            :
            <IconContext.Provider value={{ className: "microphone" }}>
              <FaMicrophoneAltSlash />
            </IconContext.Provider>
          }
         {!listening &&
        <button onClick={SpeechRecognition.startListening}>Start</button>
       
         }
      
    
      {listening &&
        <button onClick={SpeechRecognition.abortListening}>Cancel</button>
      }
</>
  )
}

export default Dictaphone
