//import { useDispatch } from 'react-redux'


const WordList = ({ wordBank }) => {

//maybe put list in local storage so it doesnt change on refresh

  return (
      <ul className="wordsList">
      {wordBank.map((item, idx) => {
        return (
          <li key={item._id}>
            {item.text}
            </li>
        )
      })
      }
   </ul>
  )
}

export default WordList