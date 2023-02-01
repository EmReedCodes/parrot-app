import { useState } from "react"
import { FaRegPlayCircle } from "react-icons/fa"
import { MdNavigateNext } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import sample from "lodash/sample"

const RepeatWord = ({ wordBank, list, userLoggedIn }) => {
  const [ourText, setOurText] = useState("")
  const [range, setRange] = useState("0.6")


  const speechHandler = text => {
    if (text) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      msg.rate = range
      window.speechSynthesis.speak(msg)
    }
  }

  const randomizeList = () => {
    if (userLoggedIn) {
      const wbArray = wordBank.map(item => item.text)
      const randomWord = sample(wbArray)
      setOurText(randomWord)
      
    } else {
      const randomWord = sample(list)
      setOurText(randomWord)
    }
  }
//TODO: Why did I put button here smh smh smh smh 
  return (
    <>
      <section className="practiceRepeatWord">
        {ourText ?
          <h2 className="repeatText">{ourText}</h2>
          :
          <h2 className="repeatText">Hit Next To Start</h2>
        }
        <button className="containIcon wordbank-play" onClick={() => speechHandler(ourText)}>
          <IconContext.Provider value={{ className: "replay-btn icon" }}>
            <FaRegPlayCircle />
          </IconContext.Provider>
        </button>
      </section>
      
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
