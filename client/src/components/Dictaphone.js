import { useEffect } from "react"
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

  useEffect(() => {
    const calculateSlicedWord = () => {
      //tried listening === 'off' no go
      if (finalTranscript !== "") {
        const word = finalTranscript.split("")
        const removeLetters = word.map(char => (Math.random() > 0.7 ? "_" : char)).join(" ")
        console.log(removeLetters)
        //need to grab missing letters to use elsewhere too
        return removeLetters
      }
      }
      setFinalWord(finalTranscript)
    setWord(calculateSlicedWord())
  }, [finalTranscript, setWord, setFinalWord])

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  if (!browserSupportsSpeechRecognition) {
    console.log("Try chrome")
    return toast.error("Unavailable in this browser")
  }
  if (!isMicrophoneAvailable) {
    return toast.error("Microphone must be on")
  }

  //this rerenders way too much

  //TODO: have nicer permissions alert for using microphone
  //TODO: create microphone that switches on/off
  //maybe transcribing? if transcribing
  //reset will actually need to fire if word heard back is rejected

  //grab the value of finalTranscript
  //take value create copy (or can I just export finalTranscript) and slice out a few letters
  //export the whole copy to sayItSpellIt so they can decide to send to db

  return (
    <div className="speech">
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <span>{word}</span>
    </div>
  )
}

export default Dictaphone
