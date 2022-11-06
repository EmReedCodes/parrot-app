import Dictaphone from "./components/Dictaphone"
import "./styles/style.css"
import { useSelector } from "react-redux"
import { FaRegPlayCircle } from "react-icons/fa"
import SortMatch from "./components/SortMatch"
import { IconContext } from "react-icons"
import { remove } from "../../features/words/wordsSlice"
import { useDispatch } from "react-redux"


const SortItSpellIt = () => {


  //const { user } = useSelector(state => state.auth)
  const { saidWord } = useSelector(state => state.word)
  const dispatch = useDispatch()
  //can check and confirm spoken word here
  const speechHandler = text => {
    if (saidWord) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
  }

  const resetWord = () => {
    dispatch(remove(saidWord))
  }
 

  return (
   
    <section className="sortItHome wordGame">
      {!saidWord &&
        <>
          <h2>Let's get to sorting!</h2>
          <p>Click start and speak a word to begin.</p>
        </>
      }
      {saidWord && (
        <>
        <button className="reset-btn" onClick={() => resetWord()}>Start Over</button>
       

        <button className='containIcon'>
                   <IconContext.Provider value={{className: "replay-btn repeatWord"}}>
                        <FaRegPlayCircle />
                        </IconContext.Provider>
               </button>
            </>
  
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
