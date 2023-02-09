import "./styles/style.css"
import { FaRegPlayCircle } from "react-icons/fa"
import SortMatch from "./components/SortMatch"
import { IconContext } from "react-icons"
import { useState, useEffect, createContext } from "react"
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { toast } from "react-toastify"
import { FaMicrophoneAltSlash } from "react-icons/fa"
import { FaMicrophoneAlt } from "react-icons/fa"
import useWindowSize from "../../hooks/useWindowSize"

//TODO: I could have split up Say It Sort It with different routes
//TODO: force change to landscape if screen is small enough
//https://stackoverflow.com/questions/55663491/how-to-detect-screen-orientation-in-mobile-website-when-using-react-js-and-orien
const appId = process.env.REACT_APP_SPEECHLY_ID
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

export const WordContext = createContext("")

//TODO how to get action only on first instance of the word appearing. previously adding animations made it happen every time the array would rearrange itself. Only want it to happen one single time.

const SortItSpellIt = () => {
  const [saidWord, setSaidWord] = useState("")

  const [backgroundClass, setBackgroundClass] = useState("")

  const commands = [
    {
      command: "red",
      callback: () => setBackgroundClass("red")
    },
    {
      command: "green",
      callback: () => setBackgroundClass("green")
    },
    {
      command: "blue",
      callback: () => setBackgroundClass("blue")
    },
    {
      command: "purple",
      callback: () => setBackgroundClass("purple")
    },
    {
      command: "yellow",
      callback: () => setBackgroundClass("yellow")
    }
  ]

  const {
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    resetTranscript,
  } = useSpeechRecognition({ commands })
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  //TODO: rework all these if's

  useEffect(() => {
    if (finalTranscript !== "") {
      SpeechRecognition.abortListening()
      setSaidWord(finalTranscript.toLowerCase())
    }
  }, [finalTranscript, setSaidWord, saidWord])

  if (!browserSupportsSpeechRecognition) {
    console.log("Try chrome")
    return toast.error("Unavailable in this browser")
  }

  if (!isMicrophoneAvailable) {
    return toast.error("Microphone must be on")
  }

  const resetWord = () => {
    setSaidWord("")
    setBackgroundClass("")
    resetTranscript()
  }

  const speechHandler = text => {
     
    if (saidWord) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
  }

  return (
    <section className={`${backgroundClass} sortItHome`}>
      {!saidWord ? (
        <>
          <h2>Let's get to sorting!</h2>
          <h5>Click start and speak a word to begin.</h5>
          <p>Say It Spell It works best with 8 letters or less currently.</p>
        </>
      ) : (
        <h5>Click or tap to hold and drag the tile.</h5>
      )}
      <p>Microphone: {listening ? "on" : "off"}</p>
      {saidWord && (
        <>
          <button className="reset-btn" onClick={() => resetWord()}>
            Restart
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

      {!saidWord && !listening && <button onClick={startListening}>Start</button>}
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
