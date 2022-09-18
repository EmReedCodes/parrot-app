import { useState, useEffect } from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { toast } from "react-toastify"

const Dictaphone = props => {
    const { word, setWord, finalWord, setFinalWord } = props

  const {
    // transcript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition()
//logic
//do I need to slice the word here or would I do it within the drag and drop component?
//need to lowercase spoken word
//have 2 copies of word one to slice one to input to db
//need to hold the letters that were sliced out of word in a new variable
//access to alphabet so at random can also throw in incorrect letters with correct letters
  //so exclude correct letters from randomization of alphabet letters
//How to export const letters? Redux?

  useEffect(() => {

    const calculateSlicedWord = () => {
   
     
      if (finalTranscript !== "") {
        const letters = []
        const word = finalTranscript.split("")
        const removeLetters = word.map(char => (Math.random() > 0.7 ? letters.push(char) && "_" : char))
          console.log(removeLetters)
          console.log(letters)
          
        return removeLetters 
      }
    }
    
    setFinalWord(finalTranscript)
    setWord(calculateSlicedWord())
  }, [finalTranscript, setWord, setFinalWord, resetTranscript])




  if (!browserSupportsSpeechRecognition) {
    console.log("Try chrome")
    return toast.error("Unavailable in this browser")
  }
  if (!isMicrophoneAvailable) {
    return toast.error("Microphone must be on")
  }



  return (
    <div className="speech">
      {!word &&
        <>
      <h3>Start by saying a word</h3>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
        </>
      }
      <button onClick={resetTranscript}>Reset</button>
    </div>
  )
}

export default Dictaphone
