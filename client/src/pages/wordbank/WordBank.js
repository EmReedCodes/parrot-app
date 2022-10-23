//import { useSynthesize, SayButton } from 'react-say'
import WordForm from './components/WordForm'
import WordList from './components/WordList'
import RepeatWord from './components/RepeatWord'
import { getWordsForList } from '../../features/bankWord/bankWordSlice'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles/style.css'
import Modal from '../../components/Modal'

const WordBank = () => {
  const [modalToggle, setModalToggle] = useState(false)
    
  const dispatch = useDispatch()
  
  const { user } = useSelector((state) => state.auth)
  const { wordBank } = useSelector((state) => state.wordBank)
console.log(wordBank)
      useEffect(() => {  
        if (user) {
          dispatch(getWordsForList())
        }
 
        }, [user, dispatch])
  
    return ( 
    <>
        <div className="contain">
            <h1>Word Bank</h1>
        <RepeatWord wordBank={wordBank}/>
          <WordForm />

          <WordList wordBank={wordBank} />
          <button onClick={() => setModalToggle(true)}>submit</button>
        <Modal open={modalToggle} />
        </div>
    </>
    );
}
 
export default WordBank;