//import { useDispatch } from 'react-redux'


const WordList = ({ wordBank }) => {
  //const dispatch = useDispatch()
    console.log(wordBank)
  //<button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
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