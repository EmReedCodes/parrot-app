import { useState } from "react"
import { FaRegPlayCircle } from "react-icons/fa"
import { MdNavigateNext } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import sample from "lodash/sample"

const RepeatWord = ({ wordBank, list }) => {
  const [ourText, setOurText] = useState("")
  const [range, setRange] = useState("0.6")

  const randomizeList = () => {
    if (wordBank) {
      const randomWord = sample(wordBank)
      setOurText(randomWord)
    }
    if (list) {
      const randomWord = sample(list)
      setOurText(randomWord)
    }
  }

  const speechHandler = text => {
    if (text) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      msg.rate = range
      window.speechSynthesis.speak(msg)
    }
  }

  return (
    <>
      <button className="containIcon" onClick={() => speechHandler(ourText)}>
        <IconContext.Provider value={{ className: "replay-btn icon" }}>
          <FaRegPlayCircle />
        </IconContext.Provider>
      </button>
      {ourText ? <h2>{ourText}</h2> : <h2>Hit Next To Begin</h2>}
      <div className="range range-output">
        <input
          type="range"
          min="0.2"
          max="1"
          defaultValue="0.8"
          step="0.2"
          className="customSlider"
          id="SpeachRateSlider"
          onChange={e => setRange(e.target.value)}
        />
      </div>

      <div className="contain-btns">
        <button className="next-btn" onClick={() => randomizeList()}>
          Next
          <MdNavigateNext />{" "}
        </button>
      </div>
    </>
  )
}

export default RepeatWord
