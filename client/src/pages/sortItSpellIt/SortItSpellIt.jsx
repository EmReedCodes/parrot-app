import "./styles/style.css"
import { FaRegPlayCircle } from "react-icons/fa"
import SortMatch from "./components/SortMatch"
import { IconContext } from "react-icons"
import { useState, useEffect, createContext } from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { toast } from "react-toastify"
import { FaMicrophoneAltSlash } from "react-icons/fa"
import { FaMicrophoneAlt } from "react-icons/fa"



export const WordContext = createContext("")

const saidColor = {
  red: "#ffb1b1",
  blue: "#c8d9ff"
}

const SortItSpellIt = () => {
  const [saidWord, setSaidWord] = useState("")

  const [background, setBackground] = useState("")



  const {
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    resetTranscript
  } = useSpeechRecognition()

//TODO: dont need this useEffect can set ternary on style itself for background
  
  useEffect(() => {
    if (finalTranscript !== "") {
      setSaidWord(finalTranscript.toLowerCase())
    }

    if (saidColor.hasOwnProperty(saidWord)) {
      setBackground(saidColor[saidWord])
    }
  }, [finalTranscript, setSaidWord, saidWord])

  if (!browserSupportsSpeechRecognition) {
    console.log("Try chrome")
    return toast.error("Unavailable in this browser")
  }

  if (!isMicrophoneAvailable) {
    return toast.error("Microphone must be on")
  }

  const style = {
    background: background
  }

  const resetWord = () => {
    setSaidWord("")
    resetTranscript()
  }
  //TODO: slow speed down on repeated word
  const speechHandler = text => {
    if (saidWord) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
  }

  return (
    <section className="sortItHome" style={style}>
      {!saidWord && (
        <>
          <h2>Let's get to sorting!</h2>
          <p>Click start and speak a word to begin.</p>
        </>
      )}

      {saidWord && (
        <>
          <button className="reset-btn" onClick={() => resetWord()}>
            Start Over
          </button>

          <button className="containIcon" onClick={() => speechHandler(saidWord)}>
            <IconContext.Provider value={{ className: "replay-btn icon" }}>
              <FaRegPlayCircle />
            </IconContext.Provider>
          </button>
        </>
      )}

      {!saidWord && listening && (
        <IconContext.Provider value={{ className: "microphone-on icon" }}>
          <FaMicrophoneAlt />
        </IconContext.Provider>
      )}
      {!saidWord && !listening && (
        <IconContext.Provider value={{ className: "microphone icon" }}>
          <FaMicrophoneAltSlash />
        </IconContext.Provider>
      )}

      {!saidWord && !listening && <button onClick={SpeechRecognition.startListening}>Start</button>}
      {!saidWord && listening && <button onClick={SpeechRecognition.abortListening}>Cancel</button>}

      {saidWord && (
        <WordContext.Provider value={[saidWord, setSaidWord]}>
          <SortMatch />
        </WordContext.Provider>
      )}
    </section>
  )
}

export default SortItSpellIt
