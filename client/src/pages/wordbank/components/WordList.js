import { AiFillDelete } from "react-icons/ai"
import { deleteWordForList } from "../../../features/bankWord/bankWordSlice"
import { useDispatch, useSelector } from "react-redux"

const WordList = props => {
  const { wordBank, list, deleteListItem, userLoggedIn } = props
  console.log(list, "wordlist")
  console.log(wordBank, 'wb')
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  return (
    <ul className="wordsList">
      {userLoggedIn
        ? wordBank.map(item => (
            <li key={item._id} id={item._id}>
              {item.text}

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
