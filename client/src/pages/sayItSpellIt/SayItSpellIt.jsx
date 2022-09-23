import Dictaphone from "./components/Dictaphone"
import SpeechForm from "../../components/SpeechForm"
import DragNDrop from "./components/DragNDrop"
import "./styles/style.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import { FaRegPlayCircle } from 'react-icons/fa'



const SayItSpellIt = () => {

  const { user } = useSelector(state => state.auth)
  const { saidWord } = useSelector(state => state.word)



//can check and confirm spoken word here
  const speechHandler = (text) => {
    if (saidWord) {
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
      
      {saidWord &&
        <div className="containReplay">
          <span>Confirm correct word</span>
          <button className='replay-btn' onClick={() => speechHandler(saidWord)}>Replay <FaRegPlayCircle />
          </button>

        </div>
      }
      
      
     {!saidWord &&
      <>
          <Dictaphone />
      </>
      }
      {saidWord &&
        <>
        <DragNDrop />
        <SpeechForm />
        </>
      }
       
   
    </div>
  )
}

export default SayItSpellIt

