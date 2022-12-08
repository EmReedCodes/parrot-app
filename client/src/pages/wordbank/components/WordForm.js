import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createWordForBank } from "../../../features/bankWord/bankWordSlice"
import { toast } from "react-toastify"



const WordForm = ({list, setList}) => {

  const [word, setWord] = useState("")

  const { user } = useSelector(state => state.auth)


  const dispatch = useDispatch()

  const onSubmit = e => {
    if (!word) {
      return toast.warn("Please enter word")
    }
    if (!user) {
      e.preventDefault()
      setList([...list, word])
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
        </div>
      </form>
    </section>
  )
}

export default WordForm
