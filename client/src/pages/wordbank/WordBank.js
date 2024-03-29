import WordForm from "./components/WordForm"
import WordList from "./components/WordList"
import RepeatWord from "./components/RepeatWord"
import { getWordsForList } from "../../features/bankWord/bankWordSlice"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./styles/style.css"
import useLocalStorage from "../../hooks/useLocalStorage"

const WordBank = () => {
 
//https://www.learnbestcoding.com/post/54/react-usestate-set-does-not-reflect-immediately
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
    <section className="verticalCenter wordbank-container">
      <h1>Word Bank</h1>
      <p>Practice repeating words from your bank or adding new ones to the list.</p>
      
        <RepeatWord wordBank={wordBank} list={list} userLoggedIn={userLoggedIn} />


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
