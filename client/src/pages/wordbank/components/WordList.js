//import { useDispatch } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai'
import { deleteWordForList } from '../../../features/bankWord/bankWordSlice'
import { useDispatch } from 'react-redux'
const WordList = ({ wordBank }) => {
const dispatch = useDispatch()
//maybe put list in local storage so it doesnt change on refresh

  return (
      <ul className="wordsList">
      {wordBank.map((item) => {
        return (
          <li key={item._id} id={item._id}>
            {item.text}
            
            <span className='dlt-btn' onClick={() => dispatch(deleteWordForList(item._id))}>
              <AiFillDelete />
          </span>
            </li>
        )
      })
      }
   </ul>
  )
}

export default WordList