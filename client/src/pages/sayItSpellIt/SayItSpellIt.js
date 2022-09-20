import Dictaphone from "../../components/Dictaphone"
import SpeechForm from "../../components/SpeechForm"
import DragNDrop from "../../components/DragNDrop"
import "./styles/style.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import { FaRegPlayCircle } from 'react-icons/fa'



const SayItSpellIt = (props) => {

  const { user } = useSelector(state => state.auth)


//word is the sliced word
  const [word, setWord] = useState("")
  //finalWord complete word 
  const [finalWord, setFinalWord] = useState("")

  const [randomChars, setRandomChars] = useState([])



//can check and confirm spoken word here
  const speechHandler = (text) => {
    if (finalWord) {
      const msg = new SpeechSynthesisUtterance()
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
  }
//speechForm will only need to pop up on completion of the game
  


  console.log(user)


  return (
    <div className="contain">
      <h1>Welcome {user.name}</h1>
      {finalWord &&
        <>
          <span>Confirm correct word</span>
        <div className="containReplay">
          <button className='replay-btn' onClick={() => speechHandler(finalWord)}>Replay <FaRegPlayCircle />
          </button>

          </div>
        <DragNDrop word={word} finalWord={finalWord} randomChars={randomChars} setRandomChars={setRandomChars} />
        </>
      }
     
     
      <Dictaphone word={word} setWord={setWord} finalWord={finalWord} setFinalWord={setFinalWord}/>
  
      {finalWord && 
        <SpeechForm word={word} setWord={setWord} finalWord={finalWord} setFinalWord={setFinalWord}  />
      }
    </div>
  )
}

export default SayItSpellIt
