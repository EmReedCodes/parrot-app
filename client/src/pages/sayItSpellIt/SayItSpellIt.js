import Dictaphone from "../../components/Dictaphone"
import SpeechForm from "../../components/SpeechForm"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/speech/speechSlice"
//changed reset from speechslice to auth slice
//import { reset } from '../../features/auth/authSlice'

const SayItSpellIt = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const { isError, message } = useSelector(state => state.speech)

  const [word, setWord] = useState("")
  const [finalWord, setFinalWord] = useState("")

  console.log(user)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate("/login")
      return
    }

    return () => {
      dispatch(reset())
      return
    }
  }, [user, navigate, isError, message, dispatch]) //ok still rendering twice but these are allowed back in
  //dont need dependencies its posting just fine

  //how to take the word from dictaphone in finalWord() and send that to db instead of input
  return (
    <div className="contain">
      <h1>Welcome {user.name}</h1>
      <p>Word is: {word}</p>
      <h3>Start by saying a word</h3>
      <Dictaphone word={word} setWord={setWord} finalWord={finalWord} setFinalWord={setFinalWord} />
      <p>Would you like the save the word to your word bank?</p>
      <SpeechForm word={word} setWord={setWord} finalWord={finalWord} setFinalWord={setFinalWord} />
    </div>
  )
}

export default SayItSpellIt
