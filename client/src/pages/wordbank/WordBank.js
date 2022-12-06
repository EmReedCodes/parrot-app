import WordForm from "./components/WordForm"
import WordList from "./components/WordList"
import RepeatWord from "./components/RepeatWord"
import { getWordsForList } from "../../features/bankWord/bankWordSlice"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./styles/style.css"
import Modal from "../../components/Modal"


const WordBank = () => {
  const [modalToggle, setModalToggle] = useState(false)

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { wordBank } = useSelector(state => state.wordBank)

  useEffect(() => {
    if (user) {
      dispatch(getWordsForList())
    }
  }, [user, dispatch])

  return (
    <section className="containSplit wordGame">
      <h1>Word Bank</h1>

      <section className="repeatSide">
        <RepeatWord wordBank={wordBank} />
      </section>

      <section className="bankSide">
        <WordForm />
        <WordList wordBank={wordBank} />
      </section>
      <button onClick={() => setModalToggle(true)}>submit</button>
      <Modal open={modalToggle} />
    </section>
  )
}

export default WordBank
