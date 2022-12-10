import WordForm from "./components/WordForm"
import WordList from "./components/WordList"
import RepeatWord from "./components/RepeatWord"
import { getWordsForList } from "../../features/bankWord/bankWordSlice"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./styles/style.css"
import useLocalStorage from "../../hooks/useLocalStorage"

const WordBank = () => {
  //TODO: instead of removing local storage send it into DB once logged in or registered?

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { wordBank } = useSelector(state => state.wordBank)
  const [localData, setLocalData] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [list, setList, deleteListItem] = useLocalStorage("list", localData)

  useEffect(() => {
    if (user) {
      dispatch(getWordsForList())
      setUserLoggedIn(true)
    }
  }, [user, dispatch])

  useEffect(() => {
    const localStorageList = localStorage.getItem("list")
    if (localStorageList) {
      setLocalData(localStorageList)
    }
  }, [])

  return (
    <section className="wordGame">
      <h1>Word Bank</h1>

      <section className="repeatSide">
        <RepeatWord wordBank={wordBank} list={list} userLoggedIn={userLoggedIn} />
      </section>

      <WordForm list={list} setList={setList} />
      <WordList
        wordBank={wordBank}
        list={list}
        deleteListItem={deleteListItem}
        userLoggedIn={userLoggedIn}
      />
    </section>
  )
}

export default WordBank
