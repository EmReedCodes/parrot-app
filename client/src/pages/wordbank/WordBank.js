//import { useSynthesize, SayButton } from 'react-say'
import WordForm from './components/WordForm'
import WordList from './components/WordList'
import RepeatWord from './components/RepeatWord'
import { getWordsForList } from '../../features/bankWord/bankWordSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles/style.css'

//text is the model input for the words
const WordBank = () => {

    
  const dispatch = useDispatch()
  
  const { user } = useSelector((state) => state.auth)
  const { wordBank } = useSelector((state) => state.wordBank)
  console.log(wordBank)
      
      useEffect(() => {
        if (user) {
            console.log('am here')
              dispatch(getWordsForList())
          }
      
        }, [user, dispatch])
  
    return ( 
    <>
        <div className="contain">
            <h1>Word Bank</h1>
        <RepeatWord wordBank={wordBank}/>
          <WordForm />
          <WordList wordBank ={wordBank} />
     
        </div>
    </>
    );
}
 
export default WordBank;