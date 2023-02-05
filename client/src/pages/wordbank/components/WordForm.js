import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createWordForBank } from "../../../features/bankWord/bankWordSlice"
import { toast } from "react-toastify"

const WordForm = ({ list, setList }) => {
  const [word, setWord] = useState("")

  const { user } = useSelector(state => state.auth)
  const { isSuccess, isError } = useSelector(state => state.wordBank)

  const dispatch = useDispatch()

  const onSubmit = e => {
    if (!word) {
      return toast.warn("Please enter word")
    }
    if (!user) {
      e.preventDefault()
      //this is how I added to the list without a render
      setList([...list, word])
      console.log(list)
      setWord("")
    }
    if (user) {
      e.preventDefault()
      dispatch(createWordForBank({ word }))
      setWord("")
      if (isSuccess === true) {
        toast.success("Successfully added to bank.", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })
      } else if (isError === true) {
        toast.warn("something went wrong, please try again.")
      }
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
