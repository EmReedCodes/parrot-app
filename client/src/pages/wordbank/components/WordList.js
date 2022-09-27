//import { useDispatch } from 'react-redux'


const WordList = ({ wordBank }) => {



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