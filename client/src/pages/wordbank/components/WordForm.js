import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createWordForBank } from "../../../features/bankWord/bankWordSlice"
import { toast } from "react-toastify"
import useLocalStorage from "../../../hooks/useLocalStorage"
//TODO: useReducer could work better here when I have time
//https://stackoverflow.com/questions/68189273/referenceerror-localstorage-is-not-defined-using-local-storage-in-nextjs
const WordForm = () => {
  
  const [getList, setGetList] = useState(
    localStorage.getItem("list") || []
  )

  const [list, addList, deleteItem, removeItem] = useLocalStorage("list", getList)

  const [word, setWord] = useState("")

  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const onSubmit = e => {
    if (!word) {
      return toast.warn("Please enter word")
    }
    if (!user) {
      e.preventDefault()
      addList([...list, word])
      console.log(list)
      setWord("")
    }
    if (user) {
      e.preventDefault()
      dispatch(createWordForBank({ word }))
      setWord("")
    }
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="enter word"
            value={word}
            onChange={e => setWord(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Word
          </button>
          <button onClick={() => removeItem(list)}></button>
        </div>
      </form>
    </section>
  )
}

export default WordForm
