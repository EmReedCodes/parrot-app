import "./styles/style.css"
import { FaRegPlayCircle } from "react-icons/fa"
import SortMatch from "./components/SortMatch"
import { IconContext } from "react-icons"
import { useState, useEffect, createContext } from "react"
// import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { toast } from "react-toastify"
import { FaMicrophoneAltSlash, FaMicrophoneAlt, FaRedoAlt } from "react-icons/fa"
import useWindowSize from "../../hooks/useWindowSize"
import Modal from "../../components/modal/Modal"

//TODO: I could have split up Say It Sort It with different routes

//https://stackoverflow.com/questions/55663491/how-to-detect-screen-orientation-in-mobile-website-when-using-react-js-and-orien
// const appId = process.env.REACT_APP_SPEECHLY_ID
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

export const WordContext = createContext("")

//TODO how to get action only on first instance of the word appearing. previously adding animations made it happen every time the array would rearrange itself. Only want it to happen one single time.

const SortItSpellIt = () => {
  const [saidWord, setSaidWord] = useState("")
  const [modalToggle, setModalToggle] = useState(false)
  const [backgroundClass, setBackgroundClass] = useState("")

  const size = useWindowSize()

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
    resetTranscript
  } = useSpeechRecognition({ commands })

  //TODO: rework all these if's

  // useEffect(() => {
  //   if (finalTranscript !== "") {
  //     SpeechRecognition.abortListening()
  //     setSaidWord(finalTranscript.toLowerCase())
  //     if (finalTranscript.length > 7) {
  //       setModalToggle(true)
  //     }
  //   }
  // }, [finalTranscript, setSaidWord])
  //check screen width
  useEffect(() => {
    if (finalTranscript.length > 5 && size.width < 500) {
      setModalToggle(true)
      return
    } else if (finalTranscript !== "") {
      SpeechRecognition.abortListening()
      setSaidWord(finalTranscript.toLowerCase())
    }
  }, [finalTranscript, setSaidWord])

  if (!browserSupportsSpeechRecognition) {
    console.log("Try chrome")
    return toast.error("Unavailable in this browser")
  }

  if (!isMicrophoneAvailable) {
    return toast.error("Microphone must be on")
  }

  //move reset word use ref maybe
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

  const toggleModalForMobile = () => {
    SpeechRecognition.abortListening()
    setSaidWord(finalTranscript.toLowerCase())
    setModalToggle(false)
  }

  const modalText = () => {
    return (
      <>
        <p>Turn your device to landscape for a better experience.</p>
      </>
    )
  }
  //TODO create a help button for better instructions
  return (
    <section className={`${backgroundClass} verticalCenter`}>
      {saidWord && (
        <div className="restart-btn-container">
          <button className="inline-btn restart-btn" onClick={() => resetWord()}>
            Restart{" "}
            <IconContext.Provider value={{ className: "restart-icon" }}>
              <FaRedoAlt />
            </IconContext.Provider>
          </button>
        </div>
      )}
      {!saidWord ? (
        <>
          <h2>Let's get to sorting!</h2>
          <h5>Click start and speak a word to begin.</h5>
        </>
      ) : (
        <div className="intro-reset-container">
          <h4>Click or tap to hold and drag the tile.</h4>
        </div>
      )}

      {saidWord && (
        <>
          <span>Replay</span>
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
      <Modal open={modalToggle} onClick={() => toggleModalForMobile()} text={modalText()} />
    </section>
  )
}

export default SortItSpellIt
