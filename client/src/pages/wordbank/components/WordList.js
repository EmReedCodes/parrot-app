import { AiFillDelete } from "react-icons/ai"
import { deleteWordForList } from "../../../features/bankWord/bankWordSlice"
import { useDispatch } from "react-redux"

const WordList = props => {
  const { wordBank, list, deleteListItem, userLoggedIn } = props

  const dispatch = useDispatch()


  return (
    <section className="bank-list-container">
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
    </section>
  )
}

export default WordList
