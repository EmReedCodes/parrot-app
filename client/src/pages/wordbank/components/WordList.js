import { AiFillDelete } from "react-icons/ai"
import { deleteWordForList } from "../../../features/bankWord/bankWordSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import useLocalStorage from "../../../hooks/useLocalStorage"

const WordList = ({ wordBank }) => {
  
  const [getList, setGetList] = useState(
    localStorage.getItem("list") || []
  )

  //const [getList, setGetList] = useState(getLocalBank || [])
  const [list, addList, deleteListItem, removeList] = useLocalStorage("list" || [])


  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)



  const deleteLocalItem = item => {
    console.log(item, "yes")
    deleteListItem(item)
    addList(list.filter(el => el !== item))
  }
  return (
    <ul className="wordsList">
      {user
        ? wordBank.map(item => {
            return (
              <li key={item._id} id={item._id}>
                {item}

                <span className="dlt-btn" onClick={() => dispatch(deleteWordForList(item._id))}>
                  <AiFillDelete />
                </span>
              </li>
            )
          })
        : list.map((item, idx) => {
            return (
              <li key={idx.toString()} id={item}>
                {item}
                <span className="dlt-btn" onClick={() => deleteLocalItem(item)}>
                  <AiFillDelete />
                </span>
              </li>
            )
          })}
    </ul>
  )
}

export default WordList
