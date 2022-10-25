import Dictaphone from "./components/Dictaphone"
import "./styles/style.css"
import { useSelector } from "react-redux"
import { FaRegPlayCircle } from "react-icons/fa"
import SortMatch from "./components/SortMatch"
import { IconContext } from "react-icons"

const SortItSpellIt = () => {
  const { user } = useSelector(state => state.auth)
  const { saidWord } = useSelector(state => state.word)

  //can check and confirm spoken word here
  const speechHandler = text => {
    if (saidWord) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
  }

  //speechForm will only need to pop up on completion of the game with modal

  return (
   
      <section>
        <h1>Welcome {user.name}</h1>
        {saidWord && (
          
            <section className="contain-replay">
              <button className="replay-btn" onClick={() => speechHandler(saidWord)}>
                <IconContext.Provider value={{ className: "playIcon" }}>
                  <FaRegPlayCircle />
                </IconContext.Provider>
                Replay
              </button>
            </section>
        
  
      )}

      {!saidWord && (
        <>
          <Dictaphone />
        </>
      )}
      {saidWord && <SortMatch />}
      </section>
  )
}

export default SortItSpellIt
