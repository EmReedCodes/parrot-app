import WordForm from "./components/WordForm"
import WordList from "./components/WordList"
import RepeatWord from "./components/RepeatWord"
import { getWordsForList } from "../../features/bankWord/bankWordSlice"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./styles/style.css"
import useLocalStorage from "../../hooks/useLocalStorage"

const WordBank = () => {


  const dispatch = useDispatch()
  const [localData, setLocalData] = useState([])
  const { user } = useSelector(state => state.auth)
  const { wordBank } = useSelector(state => state.wordBank)
  const [list, setList, deleteListItem] = useLocalStorage("list", localData)
  
  useEffect(() => {
    if (user) {
      dispatch(getWordsForList())
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
        <RepeatWord wordBank={wordBank} list={list} />
      </section>


        <WordForm list={list} setList={setList} />
      <WordList wordBank={wordBank} list={list} deleteListItem={deleteListItem} />

    
    </section>
  )
}

export default WordBank
