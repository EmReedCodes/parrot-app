import { AiFillDelete } from "react-icons/ai"
import { deleteWordForList } from "../../../features/bankWord/bankWordSlice"
import { useDispatch, useSelector } from "react-redux"

const WordList = props => {
  const { wordBank, list, deleteListItem } = props
  console.log(list, "wordlist")

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  return (
    <ul className="wordsList">
      {user
        ? wordBank.map(item => (
            <li key={item._id} id={item._id}>
              {item}

              <span className="dlt-btn" onClick={() => dispatch(deleteWordForList(item._id))}>
                <AiFillDelete />
              </span>
            </li>
          ))
        : list.map((item, idx) => (
            <li key={idx.toString()} id={idx.toString()}>
              {item}
              <span className="dlt-btn" onClick={() => deleteListItem(item)}>
                <AiFillDelete />
              </span>
            </li>
          ))}
    </ul>
  )
}

export default WordList
