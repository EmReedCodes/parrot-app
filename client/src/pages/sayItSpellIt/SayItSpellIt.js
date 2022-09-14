import Dictaphone from "../../components/Dictaphone"
import SpeechForm from "../../components/SpeechForm"
import DragNDrop from "../../components/DragNDrop"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const SayItSpellIt = () => {


  const { user } = useSelector(state => state.auth)


//word is the sliced word
  const [word, setWord] = useState("")
  //finalWord complete word 
  const [finalWord, setFinalWord] = useState("")


  console.log(user)

// 
  return (
    <div className="contain">
      <h1>Welcome {user.name}</h1>
      <DragNDrop word={word} />
      <h3>Start by saying a word</h3>
      <Dictaphone word={word} setWord={setWord} finalWord={finalWord} setFinalWord={setFinalWord} />
      <p>Would you like the save the word to your word bank?</p>
      <SpeechForm word={word} setWord={setWord} finalWord={finalWord} setFinalWord={setFinalWord} />
    </div>
  )
}

export default SayItSpellIt
